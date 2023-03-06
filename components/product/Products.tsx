
import useProducts from "@/hooks/useProducts";
import React from "react";
import ProductItem from "./ProductItem";
import styles from '@/styles/product/products.module.css'

const Products = () => {
    const {
        products,
        lastProductElementRef,
        isFetching,
        endOfList
    } = useProducts()

    return (
        <div className={styles.products_container}>
            {products?.map((product, index) => <>
                <ProductItem
                    {...product}
                    key={`product-${index}`}
                />
                {index === products.length - 1 && !endOfList ? (
                    <div ref={lastProductElementRef}>Loading...</div>
                ) : null}
            </>
            )}
            {(isFetching && !endOfList) && <div>Loading...</div>}
        </div>
    );
};

export default Products;
