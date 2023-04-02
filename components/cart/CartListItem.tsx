import { Product } from "@/types/product"
import Image from "next/image"
import styles from '@/styles/cart.module.css'
import { FC } from "react"
import { BuildingStorefrontIcon, TagIcon, PlusIcon, MinusIcon, TrashIcon } from "@heroicons/react/24/outline";
import { StarIcon, TagIcon as TagSolidIcon } from "@heroicons/react/24/solid";
import Tag from "../coreUI/Tag";
import IconButton from "../coreUI/IconButton";

interface Props {
    product: Product;
    quantity: number;
    onAddToCart: () => void;
    onRemoveItemFromCart: () => void;
    onRemoveAllItem: () => void
}

const CartListItem: FC<Props> = (
    {
        product,
        quantity,
        onAddToCart,
        onRemoveItemFromCart,
        onRemoveAllItem
    }) => {
    return (
        <li key={product.id} className={styles.cartListItem_container}>
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
                        <span className={styles.color_container}>
                            Color: {product.color.map(color => (
                                <div
                                    style={{
                                        width: 10,
                                        height: 10,
                                        backgroundColor: color.hex,
                                        borderRadius: 20
                                    }}
                                />
                            ))}
                        </span>
                        <span>
                            {product.tradeMark.name || ''} / {product.category.name}
                        </span>
                    </div>
                </div>
            </div>
            <div className={styles.cartAmount_container}>
                <div className={styles.tags_container}>
                    <Tag color="#bccefc" colorText="#3e7dd8" borderRadius={4}>
                        <BuildingStorefrontIcon width={15} /> Free Delivery
                    </Tag>
                    <Tag color="#e7b3ff" colorText="#7708b7" borderRadius={4}>
                        <TagIcon width={15} /> 10% Discount
                    </Tag>
                </div>
                <div className={styles.quantity_container}>
                    <IconButton action={onRemoveItemFromCart}>
                        <MinusIcon width={10} height={14} />
                    </IconButton>
                    <p>{quantity}</p>
                    <IconButton action={onAddToCart}>
                        <PlusIcon width={13} height={14} />
                    </IconButton>
                </div>
                <div className={styles.amount_container}>
                    <p className={styles.productCart_oldPrice}>
                        ${product.price.toFixed(2)}
                        <TagSolidIcon width={14} />
                    </p>
                    <p className={styles.productCart_price}>
                        ${(quantity * (product.price - product.price * 0.1)).toFixed(2)}
                        <IconButton action={onRemoveAllItem}>
                            <TrashIcon width={14} color="#d80000" />
                        </IconButton>
                    </p>
                </div>
            </div>
        </li>

    )
}


export default CartListItem