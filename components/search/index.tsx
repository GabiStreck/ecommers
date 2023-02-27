import styles from '@/styles/search.module.css';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

function Search() {
    return (
        <div className={styles.search_container}>
            <MagnifyingGlassIcon className={styles.search_icon} />
            <input type="text" placeholder="Enter your search shoes..." className={styles.search_input} />
        </div>
    )
}

export default Search