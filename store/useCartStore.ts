import { create } from "zustand";

const useCartStore = create((set) => {
    const isLocalStorageAvailable = typeof localStorage !== "undefined";
    const storedCart = isLocalStorageAvailable ? localStorage.getItem("cart") : null;
    const initialCart = storedCart ? JSON.parse(storedCart) : [];

    return {
        cart: initialCart,
        addToCart: (product: any) => {
            set((state: any) => {
                const isProductInCart = state.cart.some(
                    (p: any) => p.slug.current === product.slug.current
                );
                if (!isProductInCart) {
                    const updatedCart = [...state.cart, product];
                    if (isLocalStorageAvailable) {
                        localStorage.setItem("cart", JSON.stringify(updatedCart));
                    }
                    return { cart: updatedCart };
                }
                return state;
            });
        },
        removeFromCart: (product: any) =>
            set((state: any) => {
                const updatedCart = state.cart.filter(
                    (p: any) => p.slug.current !== product.slug.current
                );
                if (isLocalStorageAvailable) {
                    localStorage.setItem("cart", JSON.stringify(updatedCart));
                }
                return { cart: updatedCart };
            }),
    };
});

export default useCartStore;
