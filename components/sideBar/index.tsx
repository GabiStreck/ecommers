
import styles from '@/styles/sidebar.module.css';
import Divider from '../coreUI/Divider';
import Filter from '../filter/Filter';
import FilterCategory from '../filter/FilterCategory';
import FilterPrice from '../filter/FilterPrice';
import FilterRating from '../filter/FilterRating';

function SideBar() {
    return (
        <aside className={styles.sidebar_container}>
            <div className={styles.logo_container}>
                <img src="/logo-ecommers.png" alt="logo" height={40} />
            </div>
            <ul className={styles.filters_list}>
                <FilterCategory />
                <Divider />
                <FilterPrice />
                <Divider />
                <Filter multiselect title='Color' filters={[{ id: '10', name: 'Black' }, { id: '11', name: 'Blue' }, { id: '12', name: 'Red' }, { id: '13', name: 'Multicolor' }]} />
                <Divider />
                <FilterRating />
            </ul>
        </aside>
    )
}

export default SideBar