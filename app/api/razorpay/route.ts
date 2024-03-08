import { Product } from "@/lib/types";
import { NextResponse } from "next/server";
import Razorpay from "razorpay";

const instance = new Razorpay({
  key_id: process.env.RAZORPAY_ID ?? "",
  key_secret: process.env.RAZORPAY_KEY,
});

export async function POST(request: Request) {
  const body = await request.json();

  const lineItems = body.products.map((product: Product) => {
    return {
      name: product.name,
      amount: product.price * 100,
      currency: "INR",
      quantity: product.quantity,
    };
  });

  const invoice = await instance.invoices.create({
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
  });
  //   console.log(invoice);
  return NextResponse.json({ invoice });
}
