import React from 'react';
import dynamic from 'next/dynamic';

import useFilters from '@/hooks/useFilters';
import { StoredValue } from '@/hooks/useLocalStorage';
import { Filter } from '@/types/filters';

import {
  LoadingFilterItemList,
  LoadingFilterList,
} from '../loading/LoadingFilters';

import FilterContainer from './FilterContainer';

const FilterItem = dynamic(() => import('./FilterItem'), {
  loading: () => <LoadingFilterItemList />,
  ssr: true,
});

interface Props {
  title: string;
  filters: StoredValue<any[]>;
  children?: React.ReactNode;
  multiselect?: boolean;
  loading?: boolean;
  typeFilter: string;
}

const Filter: React.FC<Props> = ({
  title,
  filters,
  multiselect,
  children,
  loading,
  typeFilter,
}) => {
  const { handleAddToFilters, handleGetFilter, handleRemoveFromFilters } =
    useFilters();
  const selectedFilter = handleGetFilter(typeFilter)?.shift();

  const handleSelectedFilter = (filter: Filter) => {
    if (!multiselect) {
      if (selectedFilter?.id === filter.id) {
        handleRemoveFromFilters({ id: filter.id, typeFilter: typeFilter });
      }
      handleAddToFilters({ filter, typeFilter: typeFilter, onlyOne: true });
    } else {
      const isSelected = handleGetFilter(typeFilter)?.find(
        (item) => item.id === filter.id
      );

      if (isSelected?.id === filter.id) {
        handleRemoveFromFilters({ id: filter.id, typeFilter: typeFilter });
      }
      handleAddToFilters({ filter, typeFilter: typeFilter, onlyOne: false });
    }
  };

  if (loading && filters?.length === 0) return <LoadingFilterList />;

  return (
    <FilterContainer
      title={title}
      showResetForm={!!selectedFilter}
      typeFilter={typeFilter}
    >
      {filters?.map((filter, index) => (
        <FilterItem
          name={title.trim().toLowerCase()}
          label={filter.name}
          id={filter.id}
          key={filter.id ?? `${title.trim().toLowerCase()}-${index}-filterItem`}
          type={multiselect ? 'checkbox' : 'radio'}
          checked={selectedFilter?.id === filter.id}
          onSelected={() => handleSelectedFilter(filter)}
        />
      ))}
      {loading && <LoadingFilterItemList />}
      <div>{children}</div>
    </FilterContainer>
  );
};

export default Filter;
