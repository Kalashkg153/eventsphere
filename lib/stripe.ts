import Stripe from "stripe";

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("STRIPE_SECRET_KEY is missing in environment variables");
}

export const stripe = require("stripe")(
    // This is your test secret API key.
    process.env.STRIPE_SECRET_KEY,
    {
      apiVersion: "2023-10-16",
    }
  );