import { useState } from 'react';
import Image from 'next/image';
import { BuildingStorefrontIcon, StarIcon, TagIcon } from '@heroicons/react/24/outline';

import { client } from '@/graphql-client';
import { Product, Stock } from '@/types/product';
import { GET_PRODUCT } from '@/queries/product';

import LayoutPage from '@/components/layout/LayoutPage';
import Tag from '@/components/coreUI/Tag';
import { ColorList } from '@/components/product/ColorList';
import { Button } from '@/components/coreUI/Button';
import FavIcon from '@/components/favorite/FavIcon';
import { SizeChartList } from '@/components/product/SizeChartList';

import styles from '@/styles/product/ProductDetail.module.css';

interface Props {
    product: Product;
};

interface QueryResult {
    product: Product
}

const ProductDetailPage: React.FC<Props> = ({ product }) => {
    const { title, rating, price, discount, genre,
        tradeMark, category, image, color, stocks
    } = product
    const [sizeChartSelected, setSizeChartSelected] = useState<Stock>(stocks[0])

    if (!product) {
        return <div>Loading...</div>;
    }


    const handleChangeSizeChart = (id: string) => {
        const stockSelected = stocks.find(item => item.id === id)
        if (stockSelected) setSizeChartSelected(stockSelected)
    }

    return (
        <LayoutPage>
            <section className={styles.detail_container}>
                <Image
                    src={image.url}
                    alt={title}
                    className={styles.product_image}
                    width={500}
                    height={500}
                    loading="lazy"
                />
                <div>
                    <div className={styles.detail_contein}>
                        <div>
                            <div className={styles.title_container}>
                                <h1>{title}</h1>
                                <FavIcon product={product} />
                            </div>
                            <div className={styles.tag_container}>
                                <Tag color="#ffe09b" colorText="#b78108" borderRadius={10}>
                                    <StarIcon width={12} color="Goldenrod" /> {rating}
                                </Tag>
                                <Tag color="#bccefc" colorText="#3e7dd8" borderRadius={4}>
                                    <BuildingStorefrontIcon width={15} /> Free Delivery
                                </Tag>
                            </div>
                        </div>

                        <div className={styles.amount_container}>
                            {discount === 0 ? null : (
                                <p className={styles.price}>
                                    ${price.toFixed(2)}
                                </p>
                            )}
                            <span className={styles.price_discount}>
                                ${(price - price * (discount / 100)).toFixed(2)}
                                {discount === 0 ? null : (
                                    <div className={styles.tag_container}>
                                        <Tag
                                            color="#e7b3ff"
                                            colorText="#7708b7"
                                            borderRadius={8}
                                        >
                                            <TagIcon width={15} /> {discount}% Discount
                                        </Tag>
                                    </div>
                                )}
                            </span>
                        </div>
                        <div className={styles.description_container}>
                            <ColorList colors={color} />
                            <p>Genre: <span className={styles.text_bold}>{genre}</span></p>
                            <p>
                                Trade: <span className={styles.text_bold}>
                                    {tradeMark.name || '-'}
                                </span>
                            </p>
                            <p>
                                Category: <span className={styles.text_bold}>
                                    {category.name}
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className={styles.stocks_container}>
                        <SizeChartList
                            stocks={stocks}
                            onSelect={handleChangeSizeChart}
                            sizeChartSelected={sizeChartSelected.sizeChart}
                        />
                        <p>
                            Stock: <span className={styles.text_bold}>{sizeChartSelected?.stock}</span>
                        </p>
                        <Button
                            active
                            disabled={sizeChartSelected?.stock === 0}
                        >
                            Buy now
                        </Button>
                        <Button disabled={sizeChartSelected?.stock === 0}>Add to cart</Button>
                    </div>
                </div>
            </section>
        </LayoutPage >
    );
};


export const getServerSideProps = async ({ params }: any) => {
    try {
        const { product } = await client.request<QueryResult>(
            GET_PRODUCT, { id: params.id }
        );

        if (!product) {
            return { notFound: true };
        }

        return { props: { product } };
    } catch (error) {
        return { props: { product: undefined } };
    }
};

export default ProductDetailPage;
