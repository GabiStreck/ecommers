import { FC } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import styles from '@/styles/Search.module.css';

interface SearchInputProps {
    handleChangeQuery: (target: HTMLInputElement) => void;
    autofocus?: boolean;
}

const SearchInput: FC<SearchInputProps> = ({ handleChangeQuery, autofocus = false }) => (
    <div className={styles.search_container}>
        <MagnifyingGlassIcon className={styles.search_icon} />
        <input
            type="text"
            autoFocus={autofocus}
            onChange={({ target }) => handleChangeQuery(target)}
            placeholder="Enter your search shoes..."
            className={styles.search_input}
        />
    </div>
)

export default SearchInput