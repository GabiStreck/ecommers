import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import dynamic from 'next/dynamic';

import { usePopup } from '@/hooks/usePopup';

import IconButton from '../coreUI/IconButton';
import Popup from '../coreUI/Popup/Popup';

const Cart = dynamic(() => import('./Cart'), {
  loading: () => <span>...loading</span>,
  ssr: true,
});

const CartPopup = () => {
  const { isOpen, togglePopup, popupRef, buttonRef, popupPosition } =
    usePopup();

  return (
    <>
      <IconButton action={togglePopup} title="Cart" buttonRef={buttonRef}>
        <ShoppingBagIcon width={15} height={15} />
      </IconButton>
      {isOpen && (
        <Popup
          popupRef={popupRef}
          popupPosition={popupPosition}
          onClose={togglePopup}
        >
          <Cart />
        </Popup>
      )}
    </>
  );
};

export default CartPopup;
