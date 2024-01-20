import { NextResponse } from "next/server";
import Razorpay from "razorpay";

const instance = new Razorpay({
  key_id: process.env.RAZORPAY_ID ?? "",
  key_secret: process.env.RAZORPAY_KEY,
});

export async function POST(request: Request) {
  const body = await request.json();
  instance.invoices.create({
    type: "invoice",
    // date: Math.floor(Date.now() / 1000),
    customer: {
      name: "Aman Varshney",
      email: "amanyoyoyo@gmail.com",
      contact: "9267971037",
    },
    line_items: [
      {
        name: "Item 1",
        description: "Item 1 description",
        amount: body.amount * 100,
        currency: "INR",
        quantity: 1,
      },
    ],
  });

  return NextResponse.json({ message: "success" });
  // return NextResponse.json({ message: "success", invoice });
}
