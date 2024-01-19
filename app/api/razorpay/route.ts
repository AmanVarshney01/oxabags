import { NextResponse } from "next/server";
import Razorpay from "razorpay";
import { v4 as uuid } from "uuid";

const instance = new Razorpay({
  key_id: process.env.RAZORPAY_ID ?? "",
  key_secret: process.env.RAZORPAY_KEY,
});

export async function GET(request: Request) {
  //   const { searchParams } = new URL(request.url);
  //   const totalAmount = Number(searchParams.get("amount")); 

  // const amount = totalAmount * 100;
  // const options = {
  //   amount: amount.toString(),
  //   currency: "INR",
  //   receipt: uuid(),
  // };

  // const order = await instance.orders.create(options);
  const invoice = instance.invoices.create({
    type: "invoice",
    date: 1589994898,
    customer: {
      name: "Aman Varshney",
      email: "amanyoyoyo@gmail.com",
      contact: "9267971037"
    },
    line_items: [
      {
        name: "Item 1",
        description: "Item 1 description",
        amount: 50000,
        currency: "INR",
        quantity: 1,
      },
    ],
  });

  // const issuedInvoice = await instance.invoices.issue(invoice.);
  return NextResponse.json({ message: "success", invoice });
}