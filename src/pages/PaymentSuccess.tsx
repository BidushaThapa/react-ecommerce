import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";

const VERIFY_API_URL = "http://localhost:5000/api/payment/khalti/verify";

type PaymentState = "loading" | "success" | "failure";

type VerifyResponse = {
  success?: boolean;
  message?: string;
  error?: string;
  detail?: string;
};

const getStoredAmount = (orderId: string): number => {
  if (orderId) {
    const direct = Number(sessionStorage.getItem(`order_amount_${orderId}`));
    if (Number.isFinite(direct) && direct > 0) return direct;
  }

  const key = Object.keys(sessionStorage).find((k) =>
    k.startsWith("order_amount_"),
  );
  const fallback = key ? Number(sessionStorage.getItem(key)) : 0;
  return Number.isFinite(fallback) && fallback > 0 ? fallback : 0;
};

export const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const [state, setState] = useState<PaymentState>("loading");
  const [message, setMessage] = useState("Verifying your payment...");
  const verifyingRef = useRef(false);

  useEffect(() => {
    const pidx = searchParams.get("pidx");
    const purchaseOrderId = searchParams.get("purchase_order_id") || "";
    const storedKey = `order_amount_${purchaseOrderId}`;

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
          body: JSON.stringify({
            pidx,
            purchase_order_id: purchaseOrderId,
            expected_amount: getStoredAmount(purchaseOrderId),
          }),
        });
        const data: VerifyResponse = await response.json();

        if (!response.ok || !data.success) {
          throw new Error(
            data.error ||
              data.detail ||
              "Payment verification failed.",
          );
        }

        setState("success");
        setMessage(data.message || "Payment Successful");
        sessionStorage.removeItem(storedKey);
      } catch (error) {
        setState("failure");
        setMessage(
          error instanceof Error
            ? error.message
            : "Payment verification failed.",
        );
      }
    };

    if (!verifyingRef.current) {
      verifyingRef.current = true;
      void verifyPayment();
    }
  }, [searchParams]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f8f7f3] p-6 text-center text-black">
      <section className="w-full max-w-md rounded-xl border border-[#dedbd2] bg-white p-8 shadow-lg">
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