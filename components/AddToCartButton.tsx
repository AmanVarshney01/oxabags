"use client";
import { Button } from "./ui/button";
import { PlusIcon } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";
import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "./ui/toast";
import Link from "next/link";
import { Actions, Product } from "@/store/useCartStore";

export default function AddToCartButton({ product }: { product: Product }) {
  const { toast } = useToast();

  const { addToCart }: Actions = useCartStore();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const clickedAddToCart = () => {
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

  return (
    <>
      {isClient && (
        <Button
          onClick={() => clickedAddToCart()}
          variant={"default"}
          className={`relative w-full rounded-full border shadow transition duration-100 active:scale-95`}
        >
          <div className="absolute left-0 ml-4">
            <PlusIcon className="h-6 w-6" />
          </div>
          <span className="">
            Add to Cart
          </span>
        </Button>
      )}
    </>
  );
}
