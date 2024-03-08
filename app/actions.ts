"use server";

import Razorpay from "razorpay";
import { Product } from "@/lib/types";
import { redirect } from "next/navigation";

const instance = new Razorpay({
  key_id: process.env.RAZORPAY_ID ?? "",
  key_secret: process.env.RAZORPAY_KEY,
});

export async function sendInvoice(body: any) {
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

  if (invoice.status === "issued") {
    redirect(
      `/cart/success?name=${invoice.customer_details.name}&email=${invoice.customer_details.email}&phoneNumber=${invoice.customer_details.contact}&short_url=${invoice.short_url}`,
    );
  } else {
    console.error("An error occurred please try again");
  }

}
