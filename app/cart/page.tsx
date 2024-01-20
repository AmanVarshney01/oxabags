"use client";
import CartProductCard from "@/components/CartProductCard";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/useCartStore";
import { useState, useEffect } from "react";

import { FormEvent } from "react";

export default function CartPage() {
  const { cart, removeFromCart, addToCart, deleteFromCart } = useCartStore();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const plainFormData = Object.fromEntries(formData.entries());

    const cartProducts = cart.map((item) => ({
      // id: item.slug,
      name: item.name,
      price: item.price,
      quantity: item.quantity,
    }));
    try {
      const response = await fetch("/api/razorpay", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formData: plainFormData,
          products: cartProducts,
        }),
      });
    } catch (error) {
      console.error("An error occurred:", error);
    }
    // console.log(response);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Cart</h1>
      {isClient && cart.length > 0 ? (
        <div className="flex flex-row gap-4">
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
      ) : (
        <span>Empty Cart</span>
      )}
      <h1 className="text-2xl font-bold">Checkout</h1>

      <form onSubmit={handleSubmit} className="flex flex-col">
        <label htmlFor="name" className="mb-2">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="mb-4 rounded-md border border-gray-300 p-2"
        />

        <label htmlFor="email" className="mb-2">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="mb-4 rounded-md border border-gray-300 p-2"
        />

        <label htmlFor="phoneNumber" className="mb-2">
          Phone Number:
        </label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          className="mb-4 rounded-md border border-gray-300 p-2"
        />

        <label htmlFor="address" className="mb-2">
          Address:
        </label>
        <input
          type="text"
          id="address"
          name="address"
          className="mb-4 rounded-md border border-gray-300 p-2"
        />

        <Button
          type="submit"
          className="rounded-md bg-blue-500 px-4 py-2 text-white"
        >
          Send Invoice
        </Button>
      </form>
    </div>
  );
}
