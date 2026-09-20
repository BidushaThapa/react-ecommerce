import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const VERIFY_API_URL = "http://localhost:5000/api/payment/khalti/verify";

type PaymentState = "loading" | "success" | "failure";

type LookupResponse = {
  status?: string;
  detail?: string;
  error?: string;
};

export const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const [state, setState] = useState<PaymentState>("loading");
  const [message, setMessage] = useState("Verifying your payment...");

  useEffect(() => {
    const pidx = searchParams.get("pidx");

    if (!pidx) {
      setState("failure");
      setMessage("Payment verification failed: missing payment reference.");
      return;
    }

    const verifyPayment = async () => {
      try {
        const response = await fetch(VERIFY_API_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ pidx }),
        });
        const data: LookupResponse = await response.json();

        if (!response.ok || data.status !== "Completed") {
          throw new Error(
            data.detail ||
              data.error ||
              `Payment status: ${data.status || "Unknown"}`,
          );
        }

        setState("success");
        setMessage("Payment Successful");
      } catch (error) {
        setState("failure");
        setMessage(
          error instanceof Error
            ? error.message
            : "Payment verification failed.",
        );
      }
    };

    void verifyPayment();
  }, [searchParams]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-white p-6 text-center text-black">
      <section className="max-w-md rounded-lg p-8 shadow-md">
        <h1
          className={`text-2xl font-bold ${state === "success" ? "text-green-600" : state === "failure" ? "text-red-600" : "text-amber-600"}`}
        >
          {state === "loading"
            ? "Verifying Payment"
            : state === "success"
              ? "Payment Successful"
              : "Payment Failed"}
        </h1>
        <p className="mt-3 text-gray-700">{message}</p>
      </section>
    </main>
  );
};
