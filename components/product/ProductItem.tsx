import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/24/solid';
import { Product } from '@/types/product';

import FavIcon from '../favorite/FavIcon';
import CartButton from './CartButton';

import styles from '@/styles/product/ProductItem.module.css';

const ProductItem: React.FC<Product> = (product) => {
  const { title, rating, price, image, discount } = product;
  return (
    <article className={styles.productItem_container}>
      <div className={styles.productItem_fav}>
        <FavIcon product={product} />
      </div>
      <Link href={`/product/${product.id}`}>
        <Image
          src={image.url}
          alt="prod"
          className={styles.productItem_image}
          loading="lazy"
          width={150}
          height={200}
        />
        <div className={styles.productItem_detail}>
          <h1 className={styles.productItem_title}>{title}</h1>
          <div className={styles.productItem_rating}>
            <span>
              {rating}
              <StarIcon width={12} color="Goldenrod" />
            </span>{' '}
            120 review
          </div>
          <div className={styles.productItem_prices}>
            <span>
              ${price.toFixed(2)}
            </span> ${(price - price * (discount / 100)).toFixed(2)}
          </div>
        </div>
      </Link>
      <div className={styles.productItem_cart}>
        <CartButton product={product} />
      </div>
    </article>
  );
};

export default ProductItem;
