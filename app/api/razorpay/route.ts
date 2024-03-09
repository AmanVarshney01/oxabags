export const runtime = "edge";

import { Product } from "@/lib/types";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const razorpayID = process.env.RAZORPAY_ID;
  const razorpayKey = process.env.RAZORPAY_KEY;

  const body = await request.json();

  const lineItems = body.products.map((product: Product) => {
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
      name: body.name,
      email: body.email,
      contact: body.phoneNumber,
      shipping_address: {
        line1: body.addressLine,
        city: body.city,
        state: body.state,
        country: "India",
        zipcode: body.zipcode,
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
