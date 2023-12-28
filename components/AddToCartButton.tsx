"use client";
import { Button } from "./ui/button";
import { PlusIcon } from "lucide-react";
import useCartStore from "@/store/useCartStore";

export default function AddToCartButton({ product }: { product: any }) {
  const { cart, addToCart }: any = useCartStore();

return (
    <Button
        onClick={() => addToCart(product)}
        variant={"outline"}
        className={`relative w-full rounded-full border border-blue-600 text-blue-600 shadow hover:opacity-90 active:scale-95 transition duration-150 ease-in-out ${cart.includes(product) ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={cart.includes(product)}
    >
        <PlusIcon className="absolute left-0 ml-4 h-6 w-6" />
        <span className="">Add to Cart</span>
    </Button>
);
}
