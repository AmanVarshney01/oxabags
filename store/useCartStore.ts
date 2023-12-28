import { create } from "zustand";
import { persist } from "zustand/middleware";

type Product = {
  name: string;
  slug: {
    current: string;
  };
  price: number;
  image: {
    asset: {
      url: string;
    };
  };
};

interface State {
  cart: Product[];
  totalItems: number;
}

interface Actions {
  addToCart: (Item: Product) => void;
  removeFromCart: (Item: Product) => void;
}

const INITIAL_STATE = {
  cart: [],
  totalItems: 0,
};

export const useCartStore = create(
  persist<State & Actions>(
    (set, get) => ({
      cart: INITIAL_STATE.cart,
      totalItems: INITIAL_STATE.totalItems,
      addToCart: (product: Product) => {
        const cart = get().cart;
        const cartItem = cart.find(
          (item: any) => item.slug.current === product.slug.current,
        );
        if (cartItem) {
          const updatedCart = cart.map((item) =>
            item.slug.current === product.slug.current ? item : item,
          );
          set((state) => ({
            cart: updatedCart,
            totalItems: state.totalItems + 1,
          }));
        } else {
          const updatedCart = [...cart, product];

          set((state) => ({
            cart: updatedCart,
            totalItems: state.totalItems + 1,
          }));
        }
      },
      removeFromCart: (product: Product) => {
        set((state) => ({
          cart: state.cart.filter(
            (item) => item.slug.current !== product.slug.current,
          ),
          totalItems: state.totalItems - 1,
        }));
      },
    }),
    {
      name: "cart-store",
    },
  ),
);
