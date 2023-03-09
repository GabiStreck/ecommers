import { HeartIcon } from '@heroicons/react/24/outline'
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid'
import IconButton from './IconButton'
import { Product } from '@/types/product'
import useFavorite from '@/hooks/useFavorite'

interface Props {
    product: Product
}

const FavIcon: React.FC<Props> = ({ product }) => {
    const { handleAddToFavorite, handleRemoveFromFavorite, getFavoriteItem } = useFavorite()

    const isFavorite = !!(getFavoriteItem(product.id))
    return (
        <IconButton action={() => isFavorite ?
            handleRemoveFromFavorite(product.id) :
            handleAddToFavorite(product)
        }>
            {isFavorite ? <HeartIconSolid width={20} height={20} color='#FF3131' />
                : <HeartIcon width={20} height={20} />
            }
        </IconButton>
    )
}

export default FavIcon