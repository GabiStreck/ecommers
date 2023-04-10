import { useCallback, useEffect, useState } from 'react';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';
import useDebounce from '@/hooks/useDebounce';
import useFilters from '@/hooks/useFilters';
import useMediaQuery from '@/hooks/useMediaQuery';
import { MEDIAQUERY_SMARTPHONE } from '@/constants';

import SearchInput from './SearchInputProps';
import IconButton from '../coreUI/IconButton';
import styles from '@/styles/Search.module.css';

function Search() {
  const [query, setQuery] = useState<string>('');
  const { handlerSearch } = useFilters();
  const queryDebounce = useDebounce(query, 1000);
  const isMobile = useMediaQuery(MEDIAQUERY_SMARTPHONE)
  const [openSearch, setOpenSearch] = useState(false)

  useEffect(() => {
    handlerSearch(queryDebounce);
  }, [queryDebounce]);

  const handleChangeQuery = useCallback((target: HTMLInputElement) => {
    setQuery(target.value);
  }, []);

  if (!isMobile) return <SearchInput handleChangeQuery={handleChangeQuery} />

  return (
    <div >
      {openSearch ? (
        <div className={styles.searchMobile_container}>
          <SearchInput handleChangeQuery={handleChangeQuery} autofocus />
          <IconButton action={() => setOpenSearch(prev => !prev)}>
            <XMarkIcon width={20} />
          </IconButton >
        </div>
      ) : (
        <IconButton action={() => setOpenSearch(prev => !prev)}>
          <MagnifyingGlassIcon width={17} />
        </IconButton>
      )}
    </div>)

}


export default Search;
