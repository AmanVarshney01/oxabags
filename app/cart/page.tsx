"use client";
import CartProductCard from "@/components/CartProductCard";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/useCartStore";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Product } from "@/store/useCartStore";
import { RotateCwIcon } from "lucide-react";
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
import * as z from "zod";
const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  phoneNumber: z.string().regex(/^\d{10}$/),
  addressLine: z.string(),
  city: z.string(),
  state: z.string(),
  country: z.string().optional(),
  zipcode: z.string(),
});

export default function CartPage() {
  const router = useRouter();
  const { cart, removeFromCart, addToCart, deleteFromCart, totalAmount } =
    useCartStore();
  const [isClient, setIsClient] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Add isLoading state

  useEffect(() => {
    setIsClient(true);
  }, []);

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

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);

    const cartProducts = cart.map((item) => ({
      name: item.name,
      price: item.price,
      quantity: item.quantity,
    }));
    const response = await fetch("/api/razorpay", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...values,
        products: cartProducts,
      }),
    });

    if (response.ok) {
      router.push(
        `/cart/success?name=${values.name}&email=${values.email}&phoneNumber=${values.phoneNumber}`,
      );
    } else {
      console.error("An error occurred:", response.statusText);
    }

    setIsLoading(false);
  };

  return (
    <section className="p-2">
      <div className="py-2">
        <h1 className="p-2 text-2xl font-bold">Cart</h1>
        {isClient && cart.length > 0 ? (
          <div>
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4">
              {cart.map((product: Product, index: number) => (
                <CartProductCard
                  key={index}
                  product={product}
                  removeFromCart={removeFromCart}
                  addToCart={addToCart}
                  deleteFromCart={deleteFromCart}
                />
              ))}
            </div>
            <div className="mt-4 flex flex-col gap-2 border-t p-2">
              <h2 className=" pb-2 text-xl font-medium">Order Summary</h2>
              <div className=" flex flex-row justify-between">
                <h3>SubTotal</h3>
                <span>₹{totalAmount}</span>
              </div>
              <div className="flex flex-row justify-between">
                <h3>Shipping</h3>
                <span>Free</span>
              </div>
              <div className="flex flex-row justify-between border-t pt-1">
                <h3 className="text-lg font-medium">Total Amount</h3>
                <span className="text-lg font-medium">₹{totalAmount}</span>
              </div>
            </div>
          </div>
        ) : (
          <span className="p-2 ">Empty Cart</span>
        )}
      </div>
      <div className="py-2">
        <h1 className="p-2 text-2xl font-bold">Checkout</h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
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
              disabled={isLoading}
            >
              {isLoading ? (
                <div className=" flex flex-row gap-2">
                  <span>Sending</span>
                  <RotateCwIcon className="animate-spin" />
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
