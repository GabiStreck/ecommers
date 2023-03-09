import useCart from '@/hooks/useCart'
import { Product } from '@/types/product'
import { ShoppingBagIcon } from '@heroicons/react/24/outline'
import { IconButtonSolid } from '../coreUI/IconButton'

interface Props {
    product: Product
}

const CartButton: React.FC<Props> = ({ product }) => {
    const { handleAddToCart, handleRemoveFromCart, getCartItem } = useCart()
    const isAddedInCart = !!(getCartItem(product.id))

    return (
        <IconButtonSolid
            title={isAddedInCart ? "remove to Cart" : "Add to Cart"}
            variant={isAddedInCart ? 'solid' : 'outline'}
            action={() => isAddedInCart ?
                handleRemoveFromCart(product.id) :
                handleAddToCart({ product, quantity: 1 })}
        >
            <ShoppingBagIcon width={20} height={18} color={isAddedInCart ? 'white' : '#FF3131'} />
        </IconButtonSolid>
    )
}

export default CartButton