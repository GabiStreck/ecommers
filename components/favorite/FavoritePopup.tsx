import dynamic from 'next/dynamic';
import { HeartIcon } from '@heroicons/react/24/outline';
import { usePopup } from '@/hooks/usePopup';
import IconButton from '../coreUI/IconButton';
import Popup from '../coreUI/Popup/Popup';

const FavoriteList = dynamic(() => import('./FavoriteList'), {
  loading: () => <span>...loading</span>,
  ssr: true,
});

const FavoritePopup = () => {
  const { isOpen, togglePopup, popupRef, buttonRef, popupPosition } =
    usePopup();

  return (
    <>
      <IconButton action={togglePopup} title="Favorites" buttonRef={buttonRef}>
        <HeartIcon width={15} height={15} />
      </IconButton>
      {isOpen && (
        <Popup
          popupRef={popupRef}
          popupPosition={popupPosition}
          onClose={togglePopup}
        >
          <FavoriteList />
        </Popup>
      )}
    </>
  );
};

export default FavoritePopup;
