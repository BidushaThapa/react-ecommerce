const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const axios = require("axios");

dotenv.config();

const app = express();
const port = Number(process.env.PORT) || 5000;
const frontendUrl = process.env.FRONTEND_URL || "http://localhost:5173";
const khaltiBaseUrl = "https://a.khalti.com/api/v2/";
const defaultCustomerInfo = {
  name: "Ohho Customer",
  email: "customer@example.com",
  phone: "9800000000",
};

let users = [];

try {
  users = require("./users.json");
} catch {
  console.warn("users.json missing — auth disabled. (File is git-ignored; keep it on your server.)");
}

function publicUser(user) {
  return { token: user.token, name: user.name, email: user.email, role: user.role };
}

app.use(
  cors({
    origin: frontendUrl,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);
app.use(express.json());

function getKhaltiHeaders() {
  const cleanKey = process.env.KHALTI_SECRET_KEY
    ?.replace(/^["']|["']$/g, "")
    .replace(/^Key\s+/i, "");
  return {
    Authorization: `Key ${cleanKey}`,
    "Content-Type": "application/json",
  };
}

function sendKhaltiError(response, error) {
  const status = error.response?.status || 502;
  const detail = error.response?.data?.detail || "Khalti request failed";
  return response.status(status).json({ error: detail });
}

app.post("/api/payment/khalti/initiate", async (request, response) => {
  const {
    amount,
    purchase_order_id: purchaseOrderId,
    purchase_order_name: purchaseOrderName = "Ohho Order",
    customer_info: customerInfo = {},
  } = request.body || {};
  const numericAmount = Number(amount);

  if (!Number.isFinite(numericAmount) || numericAmount <= 0) {
    return response
      .status(400)
      .json({ error: "amount must be a positive number in NPR" });
  }

  if (!purchaseOrderId || typeof purchaseOrderId !== "string") {
    return response
      .status(400)
      .json({ error: "purchase_order_id is required" });
  }

  const paisaAmount = Math.round(numericAmount * 100);
  if (paisaAmount < 1000) {
    return response
      .status(400)
      .json({ error: "The minimum payment amount is 10 NPR" });
  }

  try {
    const khaltiResponse = await axios.post(
      `${khaltiBaseUrl}epayment/initiate/`,
      {
        return_url: `${frontendUrl}/payment-success`,
        website_url: frontendUrl,
        amount: paisaAmount,
        purchase_order_id: purchaseOrderId,
        purchase_order_name: purchaseOrderName,
        customer_info: {
          ...defaultCustomerInfo,
          ...customerInfo,
        },
      },
      { headers: getKhaltiHeaders() },
    );

    return response.json({
      payment_url: khaltiResponse.data.payment_url,
      pidx: khaltiResponse.data.pidx,
    });
  } catch (error) {
    return sendKhaltiError(response, error);
  }
});

const processedPidxStore = new Set();

app.post("/api/payment/khalti/verify", async (request, response) => {
  const {
    pidx,
    expected_amount: expectedAmount,
    purchase_order_id: purchaseOrderId,
  } = request.body || {};

  if (!pidx || typeof pidx !== "string") {
    return response.status(400).json({ error: "pidx is required" });
  }

  if (processedPidxStore.has(pidx)) {
    return response.status(400).json({ error: "This payment has already been verified" });
  }

  try {
    const khaltiResponse = await axios.post(
      `${khaltiBaseUrl}epayment/lookup/`,
      { pidx },
      { headers: getKhaltiHeaders() },
    );

    const payment = khaltiResponse.data;
    const status = payment.status;

    if (status !== "Completed") {
      return response.status(400).json({
        success: false,
        error: `Payment status: ${status || "Unknown"}`,
      });
    }

    const numericExpected = Number(expectedAmount);
    if (Number.isFinite(numericExpected) && numericExpected > 0) {
      const expectedPaisa = Math.round(numericExpected * 100);
      if (payment.total_amount !== expectedPaisa) {
        return response
          .status(400)
          .json({ success: false, error: "Amount mismatch: verification failed" });
      }
    }

    processedPidxStore.add(pidx);

    return response.json({
      success: true,
      message: "Payment verified successfully",
      purchase_order_id: purchaseOrderId,
      data: payment,
    });
  } catch (error) {
    return sendKhaltiError(response, error);
  }
});

app.use((error, request, response, next) => {
  if (error instanceof SyntaxError && error.status === 400 && "body" in error) {
    return response
      .status(400)
      .json({ error: "Request body must be valid JSON" });
  }

  return next(error);
});

app.get("/api/health", (request, response) => {
  return response.json({ status: "ok" });
});

app.post("/api/auth/login", (request, response) => {
  const { email, password } = request.body || {};

  if (!email || !password) {
    return response.status(400).json({ error: "email and password are required" });
  }

  const user = users.find(
    (candidate) => candidate.email === email && candidate.password === password,
  );

  if (!user) {
    return response.status(401).json({ error: "Invalid email or password" });
  }

  return response.json(publicUser(user));
});

app.post("/api/auth/logout", (request, response) => {
  return response.json({ success: true });
});

app.get("/api/auth/me", (request, response) => {
  const header = request.headers.authorization || "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : "";

  const user = users.find((candidate) => candidate.token === token);

  if (!user) {
    return response.status(401).json({ error: "Invalid or missing session token" });
  }

  return response.json(publicUser(user));
});

app.get("/", (request, response) => {
  return response.redirect("/api/health");
});

app.use((request, response) => {
  response.status(404).json({
    error: "Not found",
    path: request.path,
    method: request.method,
  });
});

app.listen(port, () => {
  console.log(`Khalti backend listening on http://localhost:${port}`);
});
