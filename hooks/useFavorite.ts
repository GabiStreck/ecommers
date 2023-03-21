import useFavoriteStore from '@/stores/useFavoriteStore';
import { Product } from '@/types/product';
import { useCallback, useState } from 'react';
import { shallow } from 'zustand/shallow';

const useFavorite = () => {
    const {
        favorites,
        addToFavorite,
        removeFromFavorite,
    } = useFavoriteStore(state => state, shallow)

    const [isSelected, setIsSelected] = useState<boolean>(false)

    const handleAddToFavorite = useCallback((product: Product) => {
        addToFavorite({ product: product });
        setIsSelected(true)
    }, [addToFavorite]);

    const handleRemoveFromFavorite = useCallback((productId: string) => {
        removeFromFavorite(productId);
        setIsSelected(false)
    }, [removeFromFavorite]);

    return {
        isSelected,
        favorites,
        handleAddToFavorite,
        handleRemoveFromFavorite
    }
}

export default useFavorite