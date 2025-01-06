"use client";

export const runtime = "edge";

import { sendInvoiceAction } from "@/app/actions";
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
import { useToast } from "@/components/ui/use-toast";
import { checkoutFormSchema } from "@/lib/types";
import { useCartStore } from "@/store/useCartStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useShallow } from "zustand/shallow";

const formSchema = checkoutFormSchema;

export default function CartPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [cart, totalItems, clearCart] = useCartStore(
    useShallow((state) => [state.cart, state.totalItems, state.clearCart]),
  );
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
    try {
      const cartProducts = cart.map(({ name, price, quantity }) => ({
        name,
        price,
        quantity,
      }));

      const response = await sendInvoiceAction({
        ...values,
        products: cartProducts,
      });

      if (response.error) {
        toast({ variant: "destructive", title: response.error });
        return;
      }

      clearCart();
      form.reset();
      router.push(`/cart/success?${new URLSearchParams(response.data)}`);
    } catch (error) {
      console.error("Checkout error:", error);
      toast({
        variant: "destructive",
        title: "An unexpected error occurred. Please try again.",
      });
    }
  };

  return (
    <section className="grid gap-8 p-2 md:grid-cols-2">
      <CartOrderTable />
      <div className="py-2 md:sticky md:top-20 md:h-fit">
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
            <div className="flex flex-row items-center gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full">
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
                  <FormItem className="w-full">
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter Phone Number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
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
            <div className="flex w-full flex-row items-center gap-4">
              <FormField
                control={form.control}
                name="zipcode"
                render={({ field }) => (
                  <FormItem className="w-full">
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
                  <FormItem className="w-full">
                    <FormLabel>City</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter City" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-row items-start gap-4">
              <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                  <FormItem className="w-full">
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
                  <FormItem className="w-full">
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
            </div>
            <Button
              type="submit"
              className="w-full rounded-md px-4 py-2 text-center text-background"
              disabled={form.formState.isSubmitting || totalItems == 0}
            >
              {form.formState.isSubmitting ? (
                <div className="flex flex-row items-center gap-2">
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
