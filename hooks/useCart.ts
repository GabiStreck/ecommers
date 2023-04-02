
import useCartStore from '@/stores/useCartStore';
import { CartItem } from '@/types/cart'
import { useCallback, useEffect } from 'react';
import { shallow } from 'zustand/shallow'
import useLocalStorage from './useLocalStorage';
import { CART_STORE } from '@/constants';

const useCart = () => {
    const {
        cart,
        addToCart,
        clearCart,
        removeFromCart,
        getProductInCart,
        removeItemFromCart
    } = useCartStore(
        (state) => state
        , shallow
    )
    const [cartStore, setCartStore] = useLocalStorage<CartItem[]>(CART_STORE, []);

    useEffect(() => {
        setCartStore(cart)
    }, [cart])

    const handleAddToCart = useCallback(({ product, quantity }: CartItem) => {
        addToCart({ product: product, quantity });
    }, [addToCart]);

    const handleRemoveFromCart = useCallback((productId: string) => {
        removeFromCart(productId);
    }, [removeFromCart]);

    const handleRemoveItemFromCart = useCallback((productId: string) => {
        removeItemFromCart(productId);
    }, [removeItemFromCart]);

    const getCartItem = useCallback((id: string) => {
        return getProductInCart(id);
    }, [getProductInCart])

    const handleClearCart = useCallback(() => {
        return clearCart();
    }, [clearCart])

    return {
        cart: cartStore,
        handleRemoveItemFromCart,
        handleAddToCart,
        handleRemoveFromCart,
        handleClearCart,
        getCartItem
    }
}

export default useCart