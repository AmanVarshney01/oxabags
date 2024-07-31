export const runtime = "edge";

import { invoiceSchema } from "@/lib/types";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const razorpayID = process.env.RAZORPAY_ID;
  const razorpayKey = process.env.RAZORPAY_KEY;

  const body = await request.json();

  const parsedBody = invoiceSchema.parse(body);

  const lineItems = parsedBody.products.map((product) => {
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
      name: parsedBody.name,
      email: parsedBody.email,
      contact: parsedBody.phoneNumber,
      shipping_address: {
        line1: parsedBody.addressLine,
        city: parsedBody.city,
        state: parsedBody.state,
        country: "India",
        zipcode: parsedBody.zipcode,
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
    // console.log("🚀 ~ POST ~ data:", data)
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
  }
}
