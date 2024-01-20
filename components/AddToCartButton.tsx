"use client";
import { Button } from "./ui/button";
import { PlusIcon } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";
import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";

export default function AddToCartButton({ product }: { product: any }) {
  const { toast } = useToast();

  const { addToCart, cart }: any = useCartStore();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const clickedAddToCart = () => {
    addToCart(product)
    toast({
      title: "Item added to cart!",
      // description: "",
      className: "border border-green-600 text-pretty",
    });
  };

  return (
    <>
      {isClient && (
        <Button
          onClick={() => clickedAddToCart()}
          variant={"outline"}
          className={`relative w-full rounded-full border border-blue-600 text-blue-600 shadow transition duration-150 ease-in-out hover:opacity-90 active:scale-95`}
          // disabled={isProductInCart}
        >
          <div className="absolute left-0 ml-4">
            {/* <span>{}</span> */}
            <PlusIcon className=" h-6 w-6" />
          </div>
          <span className="">
            {/* {isProductInCart ? "Already in Cart" : "Add to Cart"} */}
            Add to Cart
          </span>
        </Button>
      )}
    </>
  );
}
