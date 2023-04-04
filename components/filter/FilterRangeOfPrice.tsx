import { FC, useCallback, useEffect,useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

import styles from '@/styles/filter/filterPrice.module.css';

type MaxMinPrice = {
  min: string;
  max: string;
};

interface Props {
  query: string;
  handleChangeQuery: (range: MaxMinPrice) => void;
}
const INITIAL_RANGE = { min: '', max: '' };

const FilterRangeOfPrice: FC<Props> = ({ handleChangeQuery, query }) => {
  const [range, setRange] = useState<MaxMinPrice>(INITIAL_RANGE);

  useEffect(() => {
    if (!query) {
      setRange(INITIAL_RANGE);
    }
  }, [query]);

  const handleChangeRangePrice = (target: HTMLInputElement) => {
    const { name, value } = target;
    if (/^[0-9]*$/.test(value))
      setRange((prev) => ({ ...prev, [name]: value }));
  };

  const isValidFilter = useCallback(() => {
    return range.min && range.max && range.min < range.max;
  }, [range]);

  return (
    <div className={styles.filterPrice_container}>
      <div>
        <input
          type="text"
          name="min"
          className={styles.filterPrice_input}
          onChange={({ target }) => handleChangeRangePrice(target)}
          value={range.min}
        />
        <span className={styles.filterPrice_text}> min </span>
      </div>{' '}
      -
      <div>
        <input
          type="text"
          name="max"
          className={styles.filterPrice_input}
          onChange={({ target }) => handleChangeRangePrice(target)}
          value={range.max}
        />
        <span className={styles.filterPrice_text}> max </span>
      </div>
      {isValidFilter() && (
        <span onClick={() => handleChangeQuery(range)}>
          <MagnifyingGlassIcon width={22} />
        </span>
      )}
    </div>
  );
};

export default FilterRangeOfPrice;
