
import useCartStore from '@/stores/useCartStore';
import { CartItem } from '@/types/cart'
import { useCallback, useMemo, useState } from 'react';
import { shallow } from 'zustand/shallow'

const useCart = () => {
    const {
        cart,
        addToCart,
        removeFromCart,
        getProductInCart,
        removeItemFromCart
    } = useCartStore(
        (state) => state
        , shallow)

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

    return {
        cart,
        handleRemoveItemFromCart,
        handleAddToCart,
        handleRemoveFromCart,
        getCartItem
    }
}

export default useCart