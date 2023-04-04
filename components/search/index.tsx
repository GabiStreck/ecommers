import { useEffect, useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

import { FILTER_SEARCH } from '@/constants';
import useDebounce from '@/hooks/useDebounce';
import useFilters from '@/hooks/useFilters';
import styles from '@/styles/search.module.css';

function Search() {
  const [query, setQuery] = useState<string>('');
  const { handlerSearch } = useFilters();
  const queryDebounce = useDebounce(query, 1000);

  useEffect(() => {
    handlerSearch(queryDebounce);
  }, [queryDebounce]);

  const handleChangeQuery = (target: HTMLInputElement) => {
    setQuery(target.value);
  };

  return (
    <div className={styles.search_container}>
      <MagnifyingGlassIcon className={styles.search_icon} />
      <input
        type="text"
        onChange={({ target }) => handleChangeQuery(target)}
        placeholder="Enter your search shoes..."
        className={styles.search_input}
      />
    </div>
  );
}

export default Search;
