
import Filter from './Filter';
import styles from '@/styles/filter/filterPrice.module.css'
import usePrices from '@/hooks/usePrices';

const FilterPrice = () => {
    const { prices, loading } = usePrices()

    return <Filter loading={loading} title='Price' filters={prices} >
        <div className={styles.filterPrice_container}>
            <div>
                <input type="number" name="min" className={styles.filterPrice_input} />
                <span className={styles.filterPrice_text}>min</span>
            </div> -
            <div>
                <input type="number" name="max" className={styles.filterPrice_input} />
                <span className={styles.filterPrice_text}>max</span>
            </div>
        </div>
    </Filter>
}

export default FilterPrice