
import useCart from "@/hooks/useCart";
import PopupHeader from "../coreUI/Popup/PopupHeader";
import CartListItem from "./CartListItem";
import styles from '@/styles/cart.module.css'
import Divider from "../coreUI/Divider";
import { useMemo } from "react";
import { Button } from "../coreUI/Button";

const Cart = () => {
    const {
        cart,
        handleClearCart,
        handleAddToCart,
        handleRemoveItemFromCart,
        handleRemoveFromCart
    } = useCart()

    const totalAmount = useMemo(() => {
        return cart?.reduce((total, item) =>
            total + (item.quantity * (item.product.price - item.product.price * 0.1)),
            0
        )
    }, [cart])

    return (
        <>
            <PopupHeader
                title={`Cart (${cart?.length})`}
                showButton={!!(cart && cart.length > 0)}
                actionButton={handleClearCart}
            />
            <Divider spaceVertical={15} />
            <div className={styles.cartList_container}>
                <ul className={styles.cartList_list}>
                    {cart?.map(cartItem => (
                        <CartListItem
                            {...cartItem}
                            key={`cartItem-${cartItem.product.id}`}
                            onAddToCart={() => handleAddToCart(cartItem)}
                            onRemoveItemFromCart={() => handleRemoveItemFromCart(cartItem.product.id)}
                            onRemoveAllItem={() => handleRemoveFromCart(cartItem.product.id)}
                        />
                    ))}
                </ul>
            </div>
            {cart?.length ?
                <>

                    <Divider spaceVertical={15} />
                    <div className={styles.totalAmount_container}>
                        <span>Total Amount:
                            <span className={styles.totalAmount_price}>
                                ${totalAmount?.toFixed(2)}
                            </span>
                        </span>

                        <Button active onClick={() => { }}>BUY NOW</Button>
                    </div>
                </>
                : null}
        </>
    );
};


export default Cart;
