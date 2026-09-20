const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const axios = require("axios");

dotenv.config();

const app = express();
const port = Number(process.env.PORT) || 5000;
const frontendUrl = process.env.FRONTEND_URL || "http://localhost:5173";
const khaltiBaseUrl = "https://a.khalti.com/api/v2/";
const secretKey = process.env.KHALTI_SECRET_KEY;
const defaultCustomerInfo = {
  name: "Ohho Customer",
  email: "customer@example.com",
  phone: "9800000000",
};

app.use(cors({ origin: frontendUrl }));
app.use(express.json());

function getKhaltiHeaders() {
  return {
    Authorization:
      secretKey && secretKey.startsWith("Key ")
        ? secretKey
        : `Key ${secretKey}`,
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

app.post("/api/payment/khalti/verify", async (request, response) => {
  const { pidx } = request.body || {};

  if (!pidx || typeof pidx !== "string") {
    return response.status(400).json({ error: "pidx is required" });
  }

  try {
    const khaltiResponse = await axios.post(
      `${khaltiBaseUrl}epayment/lookup/`,
      { pidx },
      { headers: getKhaltiHeaders() },
    );

    return response.json(khaltiResponse.data);
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

app.listen(port, () => {
  console.log(`Khalti backend listening on http://localhost:${port}`);
});
