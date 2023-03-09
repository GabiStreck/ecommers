import useFavoriteStore from '@/stores/useFavoriteStore';
import { Product } from '@/types/product';
import { shallow } from 'zustand/shallow';

const useFavorite = () => {
    const {
        favorites,
        addToFavorite,
        removeFromFavorite,
        getProductInFavorite
    } = useFavoriteStore(state => state, shallow)

    const handleAddToFavorite = (product: Product) => {
        addToFavorite({ product: product });
    };

    const handleRemoveFromFavorite = (productId: string) => {
        removeFromFavorite(productId);
    };

    const getFavoriteItem = (id: string) => {
        return getProductInFavorite(id)
    }

    return {
        favorites,
        handleAddToFavorite,
        handleRemoveFromFavorite,
        getFavoriteItem
    }
}

export default useFavorite