import { FC } from 'react';
import { Stock } from '@/types/product';
import styles from '@/styles/product/SizeChartList.module.css';

interface StockProps {
    stocks: Stock[];
    sizeChartSelected: number;
    onSelect: (id: string) => void
}

export const SizeChartList: FC<StockProps> = ({ stocks, sizeChartSelected, onSelect }) => {
    return (
        <div className={styles.sizechart_container}>
            Size Charts:

            <ul className={styles.sizechart_list}>

                {stocks?.map(stock => (
                    <li

                        className={sizeChartSelected === stock.sizeChart ?
                            styles.sizechart_selected
                            : styles.sizechart_item
                        }
                        onClick={() => onSelect(stock.id)}
                        key={`sizeChart-${stock.id}`}
                    >
                        {stock.sizeChart}
                    </li>
                ))}
            </ul>
        </div>
    )
}
