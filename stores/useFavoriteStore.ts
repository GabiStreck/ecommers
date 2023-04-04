import { create } from 'zustand';

import { FAVORITE_STORE } from '@/constants';
import { AddToFavoritePayload,FavoriteStore } from '@/types/favorite';
import { Product } from '@/types/product';

const useFavoriteStore = create<FavoriteStore>((set, get) => {
  const storedFavorite =
    typeof window !== 'undefined' ? localStorage.getItem(FAVORITE_STORE) : null;

  const initialFavorite = storedFavorite ? JSON.parse(storedFavorite) : [];

  return {
    favorites: initialFavorite,
    addToFavorite: ({ product }: AddToFavoritePayload): void => {
      const { getProductInFavorite, favorites } = get();
      let favoritesClone = structuredClone(favorites);
      const itemFavorite = getProductInFavorite(product.id);
      if (itemFavorite) {
        favoritesClone = [
          ...favoritesClone.filter((item) => item.id !== product.id),
          itemFavorite,
        ];
      } else {
        favoritesClone.push(product);
      }
      set(() => ({
        favorites: favoritesClone,
      }));
    },
    removeFromFavorite: (productId: string): void => {
      set((state) => ({
        favorites: state.favorites.filter((item) => item.id !== productId),
      }));
    },
    getProductInFavorite: (productId: string): Product | undefined => {
      return get().favorites.find((item) => item.id === productId);
    },
    clearFavorites: () => {
      set((state) => ({
        favorites: [],
      }));
    },
  };
});

export default useFavoriteStore;
