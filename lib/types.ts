import { z } from "zod";

export const checkoutFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must contain at least 2 characters(s)",
  }),
  email: z.string().email(),
  phoneNumber: z.string().min(10, {
    message: "Invalid phone number",
  }),
  addressLine: z.string().min(2, {
    message: "Address too short",
  }),
  city: z.string().min(2, {
    message: "Invalid city",
  }),
  state: z.string().min(2, {
    message: "Invalid state",
  }),
  country: z.string().optional(),
  zipcode: z.string().min(6, {
    message: "Invalid zipcode",
  }),
});

export const invoiceSchema = checkoutFormSchema.extend({
  products: z.array(
    z.object({
      name: z.string(),
      price: z.number(),
      quantity: z.number(),
    }),
  ),
});
