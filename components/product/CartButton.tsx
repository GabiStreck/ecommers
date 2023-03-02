import { ShoppingBagIcon } from '@heroicons/react/24/outline'
import { useCallback, useState } from 'react'
import { IconButtonSolid } from '../coreUI/IconButton'

const CartButton = () => {
    const [addToCart, setAddToCart] = useState<boolean>(false)

    const handleOnChange = useCallback((): void => {
        setAddToCart(prev => !prev)
    }, [])
    return (
        <IconButtonSolid title="Add to Cart" variant={!addToCart ? 'outline' : 'solid'} action={handleOnChange}>
            <ShoppingBagIcon width={20} height={18} color={addToCart ? 'white' : '#FF3131'} />
        </IconButtonSolid>
    )
}

export default CartButton