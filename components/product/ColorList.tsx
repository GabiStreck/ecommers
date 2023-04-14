import { FC } from 'react';
import { Color } from '@/types/product';
import styles from '@/styles/product/ProductDetailItem.module.css';

interface ColorProps {
    colors: Color[]
}

export const ColorList: FC<ColorProps> = ({ colors }) => {
    return (
        <span className={styles.color_container}>
            Color:
            {colors?.map((color, index) => (
                <div
                    key={`color-${color.hex}-${index}`}
                    style={{
                        width: 10,
                        height: 10,
                        backgroundColor: color.hex,
                        borderRadius: 20,
                    }}
                />
            ))}
        </span>
    )
}
