import { FC,memo, useCallback } from 'react';
import { HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';

import useFavorite from '@/hooks/useFavorite';
import { Product } from '@/types/product';

import IconButton from '../coreUI/IconButton';

interface Props {
  product: Product;
}

const FavIcon: FC<Props> = memo(
  ({ product }) => {
    const { handleAddToFavorite, handleRemoveFromFavorite, getFavoriteItem } =
      useFavorite();
    const isSelected = getFavoriteItem(product.id);

    const handleFavoriteSelected = useCallback((): void => {
      if (isSelected) return handleRemoveFromFavorite(product.id);
      handleAddToFavorite(product);
    }, [isSelected]);

    return (
      <IconButton action={handleFavoriteSelected}>
        {isSelected ? (
          <HeartIconSolid width={20} height={20} color="#FF3131" />
        ) : (
          <HeartIcon width={20} height={20} />
        )}
      </IconButton>
    );
  },
  (prevProps, nextProps) => prevProps.product.id === nextProps.product.id
);

export default FavIcon;
