import React from 'react'
import ProductItem from './ProductItem'
import styles from '@/styles/product/productList.module.css'
import { useProducts } from "@/hooks/useProducts";
const ProductList = () => {
    const { products, loading } = useProducts()
    if (loading) return (<h1>Loading...</h1>)
    return (
        <section className={styles.product_list}>
            {products?.map((product, index) =>
                <ProductItem
                    {...product}
                    key={`product-${index}`}
                />
            )}

        </section>
    )
}

export default ProductList