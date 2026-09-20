import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

type CheckoutButtonProps = {
  totalAmount: number;
  purchaseOrderId: string;
  purchaseOrderName: string;
  label?: string;
};

const PAYMENT_API_URL = "http://localhost:5000/api/payment/khalti/initiate";

export const CheckoutButton = ({
  totalAmount,
  purchaseOrderId,
  purchaseOrderName,
  label = "Pay with Khalti",
}: CheckoutButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const initiatePayment = async () => {
    if (isLoading) return;

    if (!Number.isFinite(totalAmount) || totalAmount < 10) {
      setErrorMessage("The minimum payment amount is NPR 10.");
      return;
    }

    setIsLoading(true);
    setErrorMessage("");

    try {
      const response = await fetch(PAYMENT_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: totalAmount,
          purchase_order_id: purchaseOrderId,
          purchase_order_name: purchaseOrderName,
        }),
      });
      const data: { payment_url?: string; error?: string } =
        await response.json();

      if (!response.ok || !data.payment_url) {
        throw new Error(data.error || "Unable to start Khalti payment.");
      }

      window.location.href = data.payment_url;
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : "Unable to start payment.",
      );
      setIsLoading(false);
    }
  };

  return (
    <div>
      <button
        type="button"
        onClick={initiatePayment}
        disabled={isLoading}
        className="flex w-full justify-center items-center gap-2 rounded-md bg-amber-500 px-4 py-2 text-white shadow hover:bg-amber-600 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isLoading ? "Redirecting..." : label} <FaArrowRight />
      </button>
      {errorMessage && (
        <p className="mt-2 text-sm text-red-600">{errorMessage}</p>
      )}
    </div>
  );
};
