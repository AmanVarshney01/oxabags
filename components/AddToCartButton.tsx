"use client";

import { Button } from "./ui/button";
import { PlusIcon } from "lucide-react";
import { State, useCartStore } from "@/store/useCartStore";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "./ui/toast";
import Link from "next/link";
import { Actions } from "@/store/useCartStore";
import { Product } from "@/lib/types";
import { useRouter } from "next/navigation";

export default function AddToCartButton({ product }: { product: Product }) {
  const { toast } = useToast();
  const { addToCart, cart }: Actions & State = useCartStore();
  const router = useRouter();

  const cartProduct = {
    ...product,
  };

  const productInCart = cart.find((item) => item.id === product.id);

  const handleAddToCart = () => {
    addToCart(cartProduct);
    toast({
      title: "Item added to cart!",
      action: (
        <Link href="/cart">
          <ToastAction altText="View Cart">View Cart</ToastAction>
        </Link>
      ),
      className: "border border-green-600 text-pretty",
    });
  };

  const handleBuyNow = () => {
    if (productInCart?.quantity === undefined) {
      addToCart(cartProduct);
    }
    router.push("/cart");
  };

  return (
    <>
      <Button
        onClick={handleAddToCart}
        variant="secondary"
        className="relative w-full rounded-full border transition duration-100 active:scale-95"
      >
        <PlusIcon className="absolute left-0 ml-4 h-6 w-6" />
        Add to Cart
      </Button>
      <Button
        onClick={handleBuyNow}
        variant="default"
        className="relative mt-2 w-full rounded-full border transition duration-100 active:scale-95"
      >
        Buy Now
      </Button>
    </>
  );
}
