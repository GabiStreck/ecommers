
import useCartStore from '@/stores/useCartStore';
import { CartItem } from '@/types/cart'
import { shallow } from 'zustand/shallow'

const useCart = () => {
    const { cart,
        addToCart,
        removeFromCart,
        getProductInCart,
        removeItemFromCart
    } = useCartStore(
        (state) => state
        , shallow)

    const handleAddToCart = ({ product, quantity }: CartItem) => {
        addToCart({ product: product, quantity });
    };

    const handleRemoveFromCart = (productId: string) => {
        removeFromCart(productId);
    };

    const handleRemoveItemFromCart = (productId: string) => {
        removeItemFromCart(productId);
    };

    const getCartItem = (id: string) => {
        return getProductInCart(id);
    }

    return {
        cart,
        handleRemoveItemFromCart,
        handleAddToCart,
        handleRemoveFromCart,
        getCartItem
    }
}

export default useCart