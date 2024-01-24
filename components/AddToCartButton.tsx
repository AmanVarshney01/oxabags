"use client";
import { Button } from "./ui/button";
import { PlusIcon } from "lucide-react";
import { State, useCartStore } from "@/store/useCartStore";
import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "./ui/toast";
import Link from "next/link";
import { Actions, Product } from "@/store/useCartStore";
import { useRouter } from "next/navigation";

export default function AddToCartButton({ product }: { product: Product }) {
  const { toast } = useToast();

  const { addToCart, cart }: Actions & State = useCartStore();
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

  
  const router = useRouter();
  const clickedBuyNow = () => {
    if (product.quantity === undefined) {
      addToCart(product);
    }
    router.push("/cart");
  };
  return (  
    <>
      {isClient && (
        <>
          <Button
            onClick={() => clickedAddToCart()}
            variant={"secondary"}
            className={`relative w-full rounded-full border shadow transition duration-100 active:scale-95`}
          >
            <PlusIcon className="absolute left-0 ml-4 h-6 w-6" />
            Add to Cart
          </Button>
          <Button
            onClick={() => clickedBuyNow()}
            variant={"default"}
            className={`relative mt-2 w-full rounded-full border shadow transition duration-100 active:scale-95`}
          >
            Buy Now
          </Button>
        </>
      )}
    </>
  );
}
