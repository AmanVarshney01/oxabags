import { Product } from "@/lib/types";
import { NextResponse } from "next/server";
import Razorpay from "razorpay";

const instance = new Razorpay({
  key_id: process.env.RAZORPAY_ID ?? "",
  key_secret: process.env.RAZORPAY_KEY,
});

export async function POST(request: Request) {
  const body = await request.json();
  // console.log(body);

  const lineItems = body.products.map((product: Product) => {
    return {
      name: product.name,
      description: product.name + " description",
      amount: product.price * 100,
      currency: "INR",
      quantity: product.quantity,
    };
  });

  instance.invoices.create({
    type: "invoice",
    customer: {
      name: body.formData.name,
      email: body.formData.email,
      contact: body.formData.phoneNumber,
    },
    line_items: lineItems,
  });

  return NextResponse.json({ message: "success" });
}
