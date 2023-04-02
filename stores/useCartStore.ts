
import { create } from 'zustand';
import { CartItem, CartStore } from '@/types/cart';
import { CART_STORE } from '@/constants';

const useCartStore = create<CartStore>((set, get) => {
    const storedCart = typeof window !== 'undefined' ?
        localStorage.getItem(CART_STORE)
        : null;

    const initialCart = storedCart ? JSON.parse(storedCart) : [];

    return {
        cart: initialCart,
        addToCart: ({ product, quantity }: CartItem) => {
            const { cart } = get()
            let cartClone = structuredClone(cart)
            if (cartClone.some(item => item.product.id === product.id)) {
                cartClone = cartClone.map(item => {
                    if (item.product.id === product.id) {
                        item.quantity += 1
                    }
                    return item
                })
            } else {
                cartClone.push({ product, quantity: 1 })
            }
            set(() => ({
                cart: cartClone
            }));
        },
        removeFromCart: (productId: string) => {
            set((state) => ({
                cart: state.cart?.filter(item => item.product.id !== productId)
            }));
        },
        removeItemFromCart: (productId: string) => {
            const { cart } = get()
            let cartClone = structuredClone(cart)
            if (cartClone.some(item => item.product.id === productId)) {
                cartClone = cartClone.map(item => {
                    if (item.product.id === productId && item.quantity > 1) {
                        item.quantity -= 1
                    }
                    return item
                })
            }
            set(() => ({
                cart: cartClone
            }));
        },
        getProductInCart: (productId: string): CartItem | undefined => {
            return get().cart?.find(item => item.product.id === productId);
        },
        clearCart: () => {
            set((state) => ({
                cart: []
            }));
        }
    }
});

export default useCartStore;
