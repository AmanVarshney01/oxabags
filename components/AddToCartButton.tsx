"use client";
import { Button } from "./ui/button";
import { PlusIcon } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";
import { useState, useEffect } from "react";

export default function AddToCartButton({ product }: { product: any }) {
  const { addToCart, cart }: any = useCartStore();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const isProductInCart = cart.some(
    (item: any) => item.slug.current === product.slug.current,
  );

  return (
    <>
      {isClient && (
        <Button
          onClick={() => addToCart(product)}
          variant={"outline"}
          className={`relative w-full rounded-full border border-blue-600 text-blue-600 shadow transition duration-150 ease-in-out hover:opacity-90 active:scale-95 ${
            isProductInCart ? "cursor-not-allowed opacity-50" : ""
          }`}
          disabled={isProductInCart}
        >
          <PlusIcon className="absolute left-0 ml-4 h-6 w-6" />
          <span className="">
            {isProductInCart ? "Already in Cart" : "Add to Cart"}
          </span>
        </Button>
      )}
    </>
  );
}
