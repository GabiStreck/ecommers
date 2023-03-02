import React from 'react'
import ProductItem from './ProductItem'
import styles from '@/styles/product/productList.module.css'
const ProductList = () => {
    return (
        <section className={styles.product_list}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((item, index) =>
                <ProductItem key={`product-${index}`} />
            )}

        </section>
    )
}

export default ProductList