import { Product } from "./product";

export interface CartItem {
    product: Product;
    quantity: number;
}

export interface CartStore {
    cart: CartItem[];
    addToCart: ({ product, quantity }: AddToCartPayload) => void;
    removeFromCart: (productId: string) => void;
    removeItemFromCart: (productId: string) => void;
    getProductInCart: (productId: string) => CartItem | undefined;
    clearCart: () => void
}

export interface AddToCartPayload {
    product: Product;
    quantity: number;
}
