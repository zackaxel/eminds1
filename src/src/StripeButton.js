import React from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function StripeButton() {
  const handleClick = async () => {
    const stripe = await stripePromise;

    const response = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: 1999 }),
    });

    const session = await response.json();
    const result = await stripe.redirectToCheckout({ sessionId: session.id });
    if (result.error) alert(result.error.message);
  };

  return (
    <button className="mt-6 px-8 py-3 bg-green-500 text-white font-semibold rounded-2xl shadow hover:bg-green-600 transition" onClick={handleClick}>
      Buy Student Ticket $19.99
    </button>
  );
}
