import { FC } from 'react';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/24/solid';
import { Product } from '@/types/product';
import Tag from '../coreUI/Tag';

import styles from '@/styles/product/ProductDetailItem.module.css';
import { ColorList } from './ColorList';

const ProductDetailItem: FC<{ product: Product }> = ({ product }) => {
  return (
    <div className={styles.productInfo_container}>
      <Image
        src={product.image.url}
        alt={product.title}
        className={styles.cart_image}
        width={60}
        height={40}
        loading="eager"
      />
      <div className={styles.productDetail_container}>
        <div className={styles.productTitle_container}>
          <h1 className={styles.product_title}>{product.title}</h1>
          <Tag color="#ffe09b" colorText="#b78108" borderRadius={10}>
            <StarIcon width={12} color="Goldenrod" /> {product.rating}
          </Tag>
        </div>

        <div className={styles.productDescription_container}>
          <ColorList colors={product.color} />
          <span>Genre: {product.genre}</span>
          <span>
            {product.tradeMark.name || '-'} / {product.category.name}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailItem;
