import { create } from "zustand";
import { persist } from "zustand/middleware";

import { ProductBySlugQueryResult } from "@/sanity/types";

export type CartProduct = ProductBySlugQueryResult & {
  quantity: number;
};

export type State = {
  cart: CartProduct[];
  totalItems: number;
  totalAmount: number;
};

export type Actions = {
  addToCart: (Item: ProductBySlugQueryResult) => void;
  removeFromCart: (Item: CartProduct) => void;
  deleteFromCart: (Item: CartProduct) => void;
  clearCart: () => void;
};

const INITIAL_STATE: State = {
  cart: [],
  totalItems: 0,
  totalAmount: 0,
};

export const useCartStore = create(
  persist<State & Actions>(
    (set, get) => ({
      cart: INITIAL_STATE.cart,
      totalItems: INITIAL_STATE.totalItems,
      totalAmount: INITIAL_STATE.totalAmount,
      addToCart: (product: ProductBySlugQueryResult) => {
        const cart = get().cart;
        const cartItem = cart.find(
          (item) => item?.slug?.current === product?.slug?.current,
        );

        if (cartItem) {
          const updatedCart = cart.map((item) =>
            item?.slug?.current === product?.slug?.current
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          );
          set((state) => ({
            cart: updatedCart,
            totalItems: state.totalItems + 1,
            totalAmount: Math.max(state.totalAmount + product?.price!, 0),
          }));
        } else {
          set((state) => ({
            cart: [...state.cart, { ...product, quantity: 1 } as CartProduct],
            totalItems: state.totalItems + 1,
            totalAmount: Math.max(state.totalAmount + product?.price!, 0),
          }));
        }
      },
      removeFromCart: (product: CartProduct) => {
        const cart = get().cart;
        const cartItem = cart.find(
          (item) => item.slug!.current === product.slug!.current,
        );
        if (cartItem) {
          const updatedCart = cart
            .map((item) =>
              item.slug!.current === product.slug!.current
                ? { ...item, quantity: item.quantity - 1 }
                : item,
            )
            .filter((item) => item.quantity > 0);
          set((state) => ({
            cart: updatedCart,
            totalItems: state.totalItems - 1,
            totalAmount: Math.max(state.totalAmount - product.price!, 0),
          }));
        }
      },
      deleteFromCart: (product: CartProduct) => {
        const cart = get().cart;
        const updatedCart = cart.filter(
          (item) => item.slug!.current !== product.slug!.current,
        );
        set((state) => ({
          cart: updatedCart,
          totalItems: state.totalItems - product.quantity,
          totalAmount: Math.max(
            state.totalAmount - product.price! * product.quantity,
            0,
          ),
        }));
      },
      clearCart: () => {
        set(INITIAL_STATE);
      },
    }),
    {
      name: "cart",
    },
  ),
);
