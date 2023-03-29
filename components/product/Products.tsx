
import useProducts from "@/hooks/useProducts";
import React from "react";
import styles from '@/styles/product/products.module.css'
import dynamic from "next/dynamic";
import { LoadingProducts } from "../loading/LoadingProducts";

const ProductItem = dynamic(() => import("./ProductItem"), {
    loading: () => <LoadingProducts quantity={10} />,
    ssr: true,
});

const ProductsEmpyState = dynamic(() => import("./ProductsEmpyState"), {
    ssr: true,
});

const Products = () => {
    const {
        products,
        lastProductElementRef,
        isFetching,
        loading,
        endOfList
    } = useProducts()

    if (!loading && (!products || products.length === 0)) {
        return <ProductsEmpyState />
    }

    return (
        <div className={styles.products_container}>
            {products?.map((product, index) => <>
                <ProductItem
                    {...product}
                    key={`product-${product.id ?? index}`}
                />
                {index === products.length - 1 && !endOfList ? (
                    <div ref={lastProductElementRef}></div>
                ) : null}
            </>
            )}
            {(isFetching && !endOfList) && (
                <LoadingProducts quantity={10} />
            )}
        </div>
    );
};

export default Products;
