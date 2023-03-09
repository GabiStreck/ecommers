
import { create } from 'zustand';
import { CartItem, CartStore } from '@/types/cart';

const useCartStore = create<CartStore>((set, get) => ({
    cart: [],
    addToCart: ({ product, quantity }: CartItem) => {
        const { getProductInCart, cart } = get()
        let cartClone = structuredClone(cart)
        const itemCart = getProductInCart(product.id);
        if (itemCart) {
            itemCart.quantity += quantity
            cartClone = [...cartClone.filter(item => item.product.id !== product.id), itemCart]
        } else {
            cartClone.push({ product, quantity: 1 })
        }
        set(() => ({
            cart: cartClone
        }));
    },
    removeFromCart: (productId: string) => {
        set((state) => ({
            cart: state.cart.filter(item => item.product.id !== productId)
        }));
    },
    removeItemFromCart: (productId: string) => {
        set((state) => {
            const itemCart = state.getProductInCart(productId);
            if (itemCart && itemCart.quantity > 1) {
                itemCart.quantity -= 1
            } else {
                state.removeFromCart(productId)
            }
            return state;
        });
    },
    getProductInCart: (productId: string): CartItem | undefined => {
        return get().cart.find(item => item.product.id === productId);
    }
}));

export default useCartStore;
