import { useMemo } from 'react';

import useCart from '@/hooks/useCart';

import { Button } from '../coreUI/Button';
import Divider from '../coreUI/Divider';
import PopupContein from '../coreUI/Popup/PopupContein';
import PopupHeader from '../coreUI/Popup/PopupHeader';
import CartListItem from './CartListItem';

import styles from '@/styles/Cart.module.css';


const Cart = () => {
  const {
    cart,
    handleClearCart,
    handleAddToCart,
    handleRemoveItemFromCart,
    handleRemoveFromCart,
  } = useCart();

  const totalAmount = useMemo(() => {
    return cart?.reduce(
      (total, item) =>
        total + item.quantity * (item.product.price - item.product.price * 0.1),
      0
    );
  }, [cart]);

  return (
    <>
      <PopupHeader
        title={`Cart (${cart?.length})`}
        showButton={!!(cart && cart.length > 0)}
        actionButton={handleClearCart}
      />
      <Divider spaceVertical={15} />
      <PopupContein>
        {cart?.map((cartItem, index) => (

          <div key={`cartItem-${cartItem.product.id}`}>
            <CartListItem
              {...cartItem}
              onAddToCart={() => handleAddToCart(cartItem)}
              onRemoveItemFromCart={() =>
                handleRemoveItemFromCart(cartItem.product.id)
              }
              onRemoveAllItem={() => handleRemoveFromCart(cartItem.product.id)}
            />
            {index !== (cart.length - 1) ? <Divider /> : null}
          </div>

        ))}
      </PopupContein>
      {cart?.length ? (
        <>
          <Divider spaceVertical={15} />
          <div className={styles.totalAmount_container}>
            <span>
              Total Amount:
              <span className={styles.totalAmount_price}>
                ${totalAmount?.toFixed(2)}
              </span>
            </span>

            <Button active onClick={() => { }}>
              BUY NOW
            </Button>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Cart;
