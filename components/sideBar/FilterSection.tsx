import Divider from '../coreUI/Divider';
import FilterCategory from '../filter/FilterCategory';
import FilterPrice from '../filter/FilterPrice';
import FilterRating from '../filter/FilterRating';

import styles from '@/styles/Sidebar.module.css';

const FilterSection = () => (
    <ul className={styles.filters_list}>
        <FilterCategory />
        <Divider />
        <FilterPrice />
        <Divider />
        <FilterRating />
    </ul>
)

export default FilterSection;
