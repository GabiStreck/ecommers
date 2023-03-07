
import Filter from './Filter';
import styles from '@/styles/filter/filterPrice.module.css'

const FilterPrice = () => {
    const prices = [{ id: '6', name: '$0 - $50' }, { id: '7', name: '$50 - $100' }, { id: '8', name: '$100 - $150' }, { id: '9', name: 'Over $150' }]
    return <Filter loading={false} title='Price' filters={prices} >
        <div className={styles.filterPrice_container}>
            <div >
                <input type="number" name="min" className={styles.filterPrice_input} />
                <span className={styles.filterPrice_text}>min</span>
            </div> - <div >
                <input type="number" name="max" className={styles.filterPrice_input} />
                <span className={styles.filterPrice_text}>max</span>
            </div>
        </div>
    </Filter>
}

export default FilterPrice