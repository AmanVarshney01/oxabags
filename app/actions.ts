"use server";

import { invoiceSchema } from "@/lib/types";

const razorpayID = process.env.RAZORPAY_ID;
const razorpayKey = process.env.RAZORPAY_KEY;

if (!razorpayID || !razorpayKey) {
  throw new Error("Razorpay credentials are not properly configured");
}

export const sendInvoiceAction = async (input: unknown) => {
  try {
    const parsedInput = invoiceSchema.parse(input);

    const lineItems = parsedInput.products.map((product) => ({
      name: product.name,
      amount: product.price * 100,
      currency: "INR",
      quantity: product.quantity,
    }));

    const invoice = {
      type: "invoice",
      customer: {
        name: parsedInput.name,
        email: parsedInput.email,
        contact: parsedInput.phoneNumber,
        shipping_address: {
          line1: parsedInput.addressLine,
          city: parsedInput.city,
          state: parsedInput.state,
          country: "India",
          zipcode: parsedInput.zipcode,
        },
      },
      line_items: lineItems,
    };

    const response = await fetch("https://api.razorpay.com/v1/invoices", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${Buffer.from(`${razorpayID}:${razorpayKey}`).toString("base64")}`,
      },
      body: JSON.stringify(invoice),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.error.description || "Failed to create invoice",
      );
    }

    const data = await response.json();

    if (data.status === "issued") {
      return {
        data: {
          name: data.customer_details.name,
          email: data.customer_details.email,
          phoneNumber: data.customer_details.contact,
          short_url: data.short_url,
        },
      };
    } else {
      throw new Error("Invoice was not issued successfully");
    }
  } catch (error) {
    console.error("Error in sendInvoiceAction:", error);
    return {
      error:
        error instanceof Error ? error.message : "An unexpected error occurred",
    };
  }
};
