"use client";

import { useToast } from "@/components/ui/use-toast";
import { Actions, State, useCartStore } from "@/store/useCartStore";
import { PlusIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { ToastAction } from "../ui/toast";
import { ProductBySlugQueryResult } from "@/sanity/types";

export default function AddToCartButton({
  product,
}: {
  product: ProductBySlugQueryResult;
}) {
  const { toast } = useToast();
  const { addToCart, cart }: Actions & State = useCartStore();
  const router = useRouter();

  const productInCart = cart.find(
    (item) => item.slug!.current === product?.slug!.current,
  );

  const handleAddToCart = () => {
    addToCart(product);
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
    if (!productInCart) {
      addToCart(product);
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
