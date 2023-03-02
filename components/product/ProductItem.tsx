
import React from 'react'
import { StarIcon, } from '@heroicons/react/24/solid'
import { ShoppingBagIcon } from '@heroicons/react/24/outline'
import { IconButtonSolid } from '../coreUI/IconButton'
import FavIcon from '../coreUI/FavIcon'
import styles from '@/styles/product/productItem.module.css'
import CartButton from './CartButton'
const ProductItem = () => {
    return (
        <article className={styles.productItem_container}>
            <div className={styles.productItem_fav}>
                <FavIcon />
            </div>
            <img src="https://picsum.photos/200" alt="prod" className={styles.productItem_image} />
            <div className={styles.productItem_detail}>
                <h1 className={styles.productItem_title}>
                    title
                </h1>
                <div className={styles.productItem_rating}>
                    <span>4.5<StarIcon width={12} color="Goldenrod" /></span> 120 review
                </div>
                <div className={styles.productItem_prices}><span>$140,00</span>  $200,00</div>
            </div>
            <div className={styles.productItem_cart}>
                <CartButton />
            </div >
        </article>
    )
}

export default ProductItem