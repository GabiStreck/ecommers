
import styles from '@/styles/sidebar.module.css';
import Image from 'next/image';
import Divider from '../coreUI/Divider';
import FilterCategory from '../filter/FilterCategory';
import FilterPrice from '../filter/FilterPrice';
import FilterRating from '../filter/FilterRating';

function SideBar() {
    return (
        <aside className={styles.sidebar_container}>
            <div className={styles.logo_container}>
                <Image src="/logo-ecommers.png" alt="logo" height={40} width={120} loading="lazy" />
            </div>
            <ul className={styles.filters_list}>
                <FilterCategory />
                <Divider />
                <FilterPrice />
                <Divider />
                <FilterRating />
            </ul>
        </aside>
    )
}

export default SideBar