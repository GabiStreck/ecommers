

import { useEffect, useState } from 'react';
import usePrices from '@/hooks/usePrices';
import FilterRangeOfPrice from './FilterRangeOfPrice';
import FilterItem from './FilterItem';
import FilterContainer from './FilterContainer';
import useFilters from '@/hooks/useFilters';
import { Filter } from '@/types/filters';
import { FILTER_PRICE } from '@/constants';

const FilterPrice = () => {
    const [query, setQuery] = useState<string>('')
    const { handleAddToFilters, handleGetFilter } = useFilters()
    const { prices, loading } = usePrices()
    const selectedFilter = handleGetFilter(FILTER_PRICE)?.shift()

    useEffect(() => {
        if (selectedFilter?.name !== query && query !== '') {
            setQuery('')
        }
    }, [selectedFilter])

    const handleChangeQuery = (range: { min: string, max: string }) => {
        const rangeString = `${range.min} - ${range.max}`
        setQuery(rangeString)
        const filterItem: Filter = { id: range.min.toString(), name: rangeString }
        handleAddToFilters({ filter: filterItem, typeFilter: FILTER_PRICE, onlyOne: true })
    }

    return (
        <FilterContainer
            title='Price'
            loading={loading}
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
                    onSelected={() => handleAddToFilters(
                        {
                            filter: { id: index.toString(), ...filter },
                            typeFilter: FILTER_PRICE, onlyOne: true
                        }
                    )}
                />
            ))}
            <div>
                <FilterRangeOfPrice handleChangeQuery={handleChangeQuery} query={query} />
            </div>
        </FilterContainer>
    )
}


export default FilterPrice