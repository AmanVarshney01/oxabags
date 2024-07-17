"use server";

import { invoiceSchema } from "@/lib/types";

export const sendInvoiceAction = async (input: unknown) => {
  const razorpayID = process.env.RAZORPAY_ID;
  const razorpayKey = process.env.RAZORPAY_KEY;

  const parsedInput = invoiceSchema.parse(input);

  const lineItems = parsedInput.products.map((product) => {
    return {
      name: product.name,
      amount: product.price * 100,
      currency: "INR",
      quantity: product.quantity,
    };
  });

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

  try {
    const response = await fetch("https://api.razorpay.com/v1/invoices", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${btoa(`${razorpayID}:${razorpayKey}`)}`,
      },
      body: JSON.stringify(invoice),
    });
    const data = await response.json();
    return {
      data: data,
    };
  } catch (error) {
    return {
      data: {
        error: {
          description: "Something went wrong",
        },
      },
    };
  }
};
