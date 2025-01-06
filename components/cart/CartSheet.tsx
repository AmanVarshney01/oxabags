"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useCartStore } from "@/store/useCartStore";
import { ShoppingCartIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useShallow } from "zustand/shallow";
import { Button } from "../ui/button";
import CartProductCard from "./CartProductCard";

export default function CartSheet() {
  const [cart, removeFromCart, addToCart, deleteFromCart] = useCartStore(
    useShallow((state) => [
      state.cart,
      state.removeFromCart,
      state.addToCart,
      state.deleteFromCart,
    ]),
  );
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
      <SheetContent className="flex flex-col p-2">
        <SheetHeader className="p-2">
          <SheetTitle>Cart</SheetTitle>
        </SheetHeader>
        <SheetDescription className="text-gray-500">
          {cart.length > 0 ? "" : "Empty"}
        </SheetDescription>
        <div className="h-full overflow-y-auto">
          {cart.map((product, index: number) => (
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
