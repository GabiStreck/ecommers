import { useCallback, useEffect } from 'react';
import { shallow } from 'zustand/shallow';

import useFavoriteStore from '@/stores/useFavoriteStore';
import { FAVORITE_STORE } from '@/constants';
import { Product } from '@/types/product';

import useLocalStorage from './useLocalStorage';

const useFavorite = () => {
  const {
    favorites,
    addToFavorite,
    removeFromFavorite,
    clearFavorites,
    getProductInFavorite,
  } = useFavoriteStore((state) => state, shallow);
  const [favoriteStore, setFavoriteStore] = useLocalStorage<Product[]>(
    FAVORITE_STORE,
    []
  );

  useEffect(() => {
    setFavoriteStore(favorites);
  }, [favorites]);

  const handleAddToFavorite = useCallback(
    (product: Product) => {
      addToFavorite({ product: product });
    },
    [addToFavorite]
  );

  const handleRemoveFromFavorite = useCallback(
    (productId: string) => {
      removeFromFavorite(productId);
    },
    [removeFromFavorite]
  );

  const handleClearFavorites = useCallback(() => {
    clearFavorites();
  }, [clearFavorites]);

  const getFavoriteItem = useCallback(
    (id: string) => {
      return getProductInFavorite(id);
    },
    [getProductInFavorite]
  );

  return {
    favorites: favoriteStore,
    handleAddToFavorite,
    handleRemoveFromFavorite,
    handleClearFavorites,
    getFavoriteItem,
  };
};

export default useFavorite;
