import { memo } from 'react';
import Image from 'next/image';

import styles from '@/styles/product/products.module.css';
const ProductsEmpyState = memo(() => {
  return (
    <div className={styles.emptyProduct_container}>
      <Image
        src="/images/empty-products-min.png"
        width={200}
        height={150}
        alt="There are no products that match the search"
        loading="lazy"
      />
      <p>There are no products that match the search.</p>
    </div>
  );
});

export default ProductsEmpyState;
