
import React from 'react'
import { StarIcon, } from '@heroicons/react/24/solid'
import { Product } from '@/types/product'
import FavIcon from '../coreUI/FavIcon'
import CartButton from './CartButton'
import styles from '@/styles/product/productItem.module.css'


const ProductItem: React.FC<Product> = (product) => {
    const { title, rating, price, image } = product
    return (
        <article className={styles.productItem_container}>
            <div className={styles.productItem_fav}>
                <FavIcon product={product} />
            </div>
            <img src={image.url} alt="prod" className={styles.productItem_image} />
            <div className={styles.productItem_detail}>
                <h1 className={styles.productItem_title}>
                    {title}
                </h1>
                <div className={styles.productItem_rating}>
                    <span>{rating}<StarIcon width={12} color="Goldenrod" /></span> 120 review
                </div>
                <div className={styles.productItem_prices}><span>${(price - price * 0.10).toFixed(2)}</span>  ${price.toFixed(2)}</div>
            </div>
            <div className={styles.productItem_cart}>
                <CartButton product={product} />
            </div >
        </article>
    )
}

export default ProductItem