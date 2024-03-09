"use client";
import { useState } from "react";
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
import { Button } from "../ui/button";
import { ShoppingCartIcon } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";
import { Product, Actions, State } from "@/store/useCartStore";
import { useRouter } from "next/navigation";

export default function CartSheet() {
  const { cart, removeFromCart, addToCart, deleteFromCart }: Actions & State =
    useCartStore();
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant={"outline"} className="relative" size="icon">
          <ShoppingCartIcon size={15} />
          {cart.length > 0 && (
            <div className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-primary"></div>
          )}
          <span className="sr-only">Cart</span>
        </Button>
      </SheetTrigger>
      <SheetContent className=" flex flex-col p-2">
        <SheetHeader className="p-2">
          <SheetTitle>Cart</SheetTitle>
        </SheetHeader>
        <SheetDescription className=" text-gray-500">
          {cart.length > 0 ? "" : "Empty"}
        </SheetDescription>
        <div className="overflow-y-auto">
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
        <SheetFooter>
          <Button
            variant="default"
            onClick={() => {
              setOpen(false);
              router.push("/cart");
            }}
            className="w-full"
            disabled={cart.length === 0}
          >
            Proceed to Checkout
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
