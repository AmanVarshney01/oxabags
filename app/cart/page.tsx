"use client";
import CartOrderTable from "@/components/cart/CartOrderTable";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { checkoutFormSchema } from "@/lib/types";
import { useCartStore } from "@/store/useCartStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = checkoutFormSchema;

export default function CartPage() {
  const router = useRouter();
  const { cart, totalItems, clearCart } = useCartStore();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      addressLine: "",
      city: "",
      state: "",
      zipcode: "",
      country: "India",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const cartProducts = cart.map((item) => ({
      name: item.name,
      price: item.price,
      quantity: item.quantity,
    }));

    const response: any = await fetch("/api/razorpay", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...values,
        products: cartProducts,
      }),
    }).then((response) => response.json());

    if (response.status === "issued") {
      clearCart();
      router.push(
        `/cart/success?name=${response.customer_details.name}&email=${response.customer_details.email}&phoneNumber=${response.customer_details.contact}&short_url=${response.short_url}`,
      );
    } else {
      console.error("An error occurred please try again");
    }

    form.reset();
  };

  return (
    <section className="p-2">
      <CartOrderTable />
      <div className="py-2">
        <h1 className="p-2 text-2xl font-bold">Checkout</h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 p-2"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Phone Number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="addressLine"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address Line</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="zipcode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Zipcode</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Zipcode" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter City" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="state"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>State</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter State" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              disabled
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Country" {...field} />
                  </FormControl>
                  <FormDescription>
                    Only India is supported currently
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="rounded-md px-4 py-2 text-white"
              disabled={form.formState.isSubmitting || totalItems == 0}
            >
              {form.formState.isSubmitting ? (
                <div className="flex flex-row gap-2">
                  <span>Loading</span>
                  <Loader2 className="animate-spin" />
                </div>
              ) : (
                "Send Invoice"
              )}
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
}
