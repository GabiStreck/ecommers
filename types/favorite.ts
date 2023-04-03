import { Product } from "./product";

export interface FavoriteStore {
    favorites: Product[];
    addToFavorite: ({ product }: AddToFavoritePayload) => void;
    removeFromFavorite: (productId: string) => void;
    getProductInFavorite: (productId: string) => Product | undefined;
    clearFavorites: () => void;
}

export interface AddToFavoritePayload {
    product: Product;
}
