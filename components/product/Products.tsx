import dynamic from 'next/dynamic';

import useProducts from '@/hooks/useProducts';
import { LoadingProducts } from '../loading/LoadingProducts';

import styles from '@/styles/product/Products.module.css';

const ProductItem = dynamic(() => import('./ProductItem'), {
  loading: () => <LoadingProducts quantity={10} />,
  ssr: true,
});

const ProductsEmpyState = dynamic(() => import('./ProductsEmpyState'), {
  ssr: true,
});

const Products = () => {
  const { products, lastProductElementRef, isFetching, loading, endOfList } =
    useProducts();

  if (!loading && (!products || products.length === 0)) {
    return <ProductsEmpyState />;
  }

  return (
    <div className={styles.products_container}>
      {products?.map((product, index) => (
        <div key={`productItem-${product.id}`}>
          <ProductItem {...product} />
          {index === products.length - 1 && !endOfList ? (
            <div ref={lastProductElementRef}></div>
          ) : null}
        </div>
      ))}
      {isFetching && !endOfList && <LoadingProducts quantity={10} />}
    </div>
  );
};

export default Products;
