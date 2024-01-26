import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Product = {
  id: number;
  name: string;
  slug: {
    current: string;
  };
  price: number;
  images: any;
  quantity: number;
};

export type State = {
  cart: Product[];
  totalItems: number;
  totalAmount: number;
};

export type Actions = {
  addToCart: (Item: Product) => void;
  removeFromCart: (Item: Product) => void;
  deleteFromCart: (Item: Product) => void;
};

const INITIAL_STATE = {
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
      addToCart: (product: Product) => {
        const cart = get().cart;
        const cartItem = cart.find(
          (item: Product) => item.slug.current === product.slug.current,
        );
        if (cartItem) {
          const updatedCart = cart.map((item) =>
            item.slug.current === product.slug.current
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          );
          set((state) => ({
            cart: updatedCart,
            totalItems: state.totalItems + 1,
            totalAmount: Math.max(state.totalAmount + product.price, 0),
          }));
        } else {
          const updatedCart = [...cart, { ...product, quantity: 1 }];

          set((state) => ({
            cart: updatedCart,
            totalItems: state.totalItems + 1,
            totalAmount: Math.max(state.totalAmount + product.price, 0),
          }));
        }
      },
      removeFromCart: (product: Product) => {
        const cart = get().cart;
        const cartItem = cart.find(
          (item: Product) => item.slug.current === product.slug.current,
        );
        if (cartItem) {
          const updatedCart = cart
            .map((item) =>
              item.slug.current === product.slug.current
                ? { ...item, quantity: item.quantity - 1 }
                : item,
            )
            .filter((item) => item.quantity > 0);
          set((state) => ({
            cart: updatedCart,
            totalItems: state.totalItems - 1,
            totalAmount: Math.max(state.totalAmount - product.price, 0),
          }));
        }
      },
      deleteFromCart: (product: Product) => {
        const cart = get().cart;
        const updatedCart = cart.filter(
          (item) => item.slug.current !== product.slug.current,
        );
        set((state) => ({
          cart: updatedCart,
          totalItems: state.totalItems - product.quantity,
          totalAmount: Math.max(
            state.totalAmount - product.price * product.quantity,
            0,
          ),
        }));
      },
    }),
    {
      name: "cart",
    },
  ),
);
