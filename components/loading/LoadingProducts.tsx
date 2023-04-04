import { FC, memo } from 'react';

import { PER_PAGE } from '@/constants';
import styles from '@/styles/Product/ProductItem.module.css';

import { CircleSkeleton, RectangleSkeleton } from './LoadingSkeleton';

interface Props {
  quantity?: number;
}

const LoadingProductItem = memo(() => (
  <article className={styles.productItem_container}>
    <div className={styles.productItem_fav}>
      <CircleSkeleton size="20px" />
    </div>

    <RectangleSkeleton width="100%" height="210px" />
    <div className={styles.productItem_detail}>
      <RectangleSkeleton width="150px" height="12px" />
      <div className={styles.productItem_rating}>
        <RectangleSkeleton width="120px" height="6px" />
      </div>
      <div className={styles.productItem_prices}>
        <RectangleSkeleton width="80px" height="12px" />
      </div>
    </div>
    <div className={styles.productItem_cart}>
      <CircleSkeleton size="40px" />
    </div>
  </article>
));

const LoadingProducts: FC<Props> = memo(({ quantity = PER_PAGE }) => {
  return (
    <>
      {Array.from(Array(quantity).keys())?.map((item) => (
        <LoadingProductItem key={`productloading-${item}`} />
      ))}
    </>
  );
});

export { LoadingProducts, LoadingProductItem };
