import useFavorite from '@/hooks/useFavorite';
import styles from '@/styles/favorite.module.css';

import Divider from '../coreUI/Divider';
import PopupContein from '../coreUI/Popup/PopupContein';
import PopupHeader from '../coreUI/Popup/PopupHeader';
import ProductDetailItem from '../product/ProductDetailItem';

import FavIcon from './FavIcon';

const FavoriteList = () => {
  const { favorites, handleClearFavorites } = useFavorite();

  return (
    <>
      <PopupHeader
        title={`Favorites (${favorites?.length})`}
        showButton={!!(favorites && favorites.length > 0)}
        actionButton={handleClearFavorites}
      />
      <Divider spaceVertical={15} />
      <PopupContein>
        {favorites?.map((product) => (
          <li key={`fav-${product.id}`} className={styles.favorites_item}>
            <ProductDetailItem product={product} />
            <FavIcon product={product} />
          </li>
        ))}
      </PopupContein>
    </>
  );
};

export default FavoriteList;
