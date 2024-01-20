"use client";
import { useToast } from "@/components/ui/use-toast";
import { useState, useEffect, useRef } from "react";
import CartProductCard from "./CartProductCard";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { ShoppingCartIcon } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";
import { client } from "@/sanity/lib/client";
import PayNowButton from "./PayNowButton";

export default function CartSheet() {
  const { toast } = useToast();
  const { cart, removeFromCart, addToCart, deleteFromCart }: any =
    useCartStore();
  // const [phoneNumber, setPhoneNumber] = useState<string>();
  const [open, setOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // const handleSubmit = (e: any) => {
  //   e.preventDefault();
  //   setOpen(false);
  //   const slugs = cart.map((product: any) => product.slug.current);
  //   const doc = {
  //     _type: "order",
  //     products: slugs,
  //     phonenumber: phoneNumber,
  //     date: new Date().toLocaleDateString("en-GB"),
  //   };

  //   client.create(doc).then((res) => {
  //     toast({
  //       title: "Thanks for your order!",
  //       description: "We have received your order and will contact you soon.",
  //       className: "border border-green-600 text-pretty",
  //     });
  //   });
  //   setPhoneNumber("");
  // };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="ml-0 md:ml-auto">
        <Button variant={"outline"} className="relative">
          <ShoppingCartIcon size={22} />
          {isClient && cart.length > 0 && (
            <div
              className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-red-500"
            ></div>
          )}
          <span className="sr-only">Cart</span>
        </Button>
      </SheetTrigger>
      <SheetContent className=" flex flex-col p-2 md:p-6">
        <SheetHeader>
          <SheetTitle>Cart</SheetTitle>
        </SheetHeader>
        <SheetDescription className=" text-gray-500">
          {cart.length > 0 ? "" : "Empty"}
        </SheetDescription>
        <div className="overflow-y-auto">
          {cart.map((product: any, index: number) => (
            <CartProductCard
              key={index}
              product={product}
              removeFromCart={removeFromCart}
              addToCart={addToCart}
              deleteFromCart={deleteFromCart}
            />
          ))}
        </div>
        <SheetFooter>
          <PayNowButton />
          {/* <form className="">
            <label htmlFor="phone" className="text-base font-bold md:text-lg">
              Request a Callback
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              pattern="[0-9]{10}"
              placeholder="Enter your phone number"
              className="mt-3 w-full rounded-lg border-2 px-3 py-2 text-black transition-colors duration-200 focus:border-blue-500 focus:outline-none dark:text-white"
              required
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <Button
              className="mt-3 w-full border shadow"
              variant="default"
              type="submit"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </form> */}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
