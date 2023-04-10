import { useEffect, useState } from 'react';

import useFilters from '@/hooks/useFilters';
import usePrices from '@/hooks/usePrices';
import { FILTER_PRICE } from '@/constants';
import { Filter } from '@/types/filters';

import {
  LoadingFilterItemList,
  LoadingFilterList,
} from '../loading/LoadingFilters';
import FilterContainer from './FilterContainer';
import FilterItem from './FilterItem';
import FilterRangeOfPrice from './FilterRangeOfPrice';


const FilterPrice = () => {
  const [query, setQuery] = useState<string>('');
  const { handleAddToFilters, handleGetFilter } = useFilters();
  const { prices, loading } = usePrices();
  const selectedFilter = handleGetFilter(FILTER_PRICE)?.shift();

  useEffect(() => {
    if (selectedFilter?.name !== query && query !== '') {
      setQuery('');
    }
  }, [selectedFilter]);

  const handleChangeQuery = (range: { min: string; max: string }) => {
    const rangeString = `${range.min} - ${range.max}`;
    setQuery(rangeString);
    const filterItem: Filter = { id: range.min.toString(), name: rangeString };
    handleAddToFilters({
      filter: filterItem,
      typeFilter: FILTER_PRICE,
      onlyOne: true,
    });
  };

  if (loading && prices?.length === 0) return <LoadingFilterList />;

  return (
    <FilterContainer
      title="Price"
      showResetForm={!!selectedFilter}
      typeFilter={FILTER_PRICE}
    >
      {prices?.map((filter, index) => (
        <FilterItem
          name={'prices'}
          label={filter.name}
          id={index.toString()}
          key={index}
          type={'radio'}
          checked={selectedFilter?.name === filter.name}
          onSelected={() =>
            handleAddToFilters({
              filter: { id: index.toString(), ...filter },
              typeFilter: FILTER_PRICE,
              onlyOne: true,
            })
          }
        />
      ))}
      {loading ? (
        <LoadingFilterItemList />
      ) : (
        <div>
          <FilterRangeOfPrice
            handleChangeQuery={handleChangeQuery}
            query={query}
          />
        </div>
      )}
    </FilterContainer>
  );
};

export default FilterPrice;
