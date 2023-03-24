import { useCallback, useMemo } from 'react';
import { shallow } from 'zustand/shallow'
import { FILTER_CATEGORY, FILTER_PRICE, FILTER_RATING, FILTER_TRADEMARK } from '@/constants';
import useFilterStore from '@/stores/useFilterStore';
import { AddToFilterPayload, Filter, removedToFilterPayload } from '@/types/filters'

const useFilters = () => {
    const {
        filters,
        addToFilter,
        removeFromFilter,
        clearFilter,
        getFilter
    } = useFilterStore((state) => state, shallow)

    const handleAddToFilters = useCallback(({ filter, typeFilter, onlyOne }: AddToFilterPayload) => {
        addToFilter({ filter: filter, typeFilter: typeFilter, onlyOne: onlyOne });
    }, [addToFilter])

    const handleRemoveFromFilters = useCallback(
        ({ id, typeFilter }: removedToFilterPayload) => {
            removeFromFilter({ id: id, typeFilter: typeFilter });
        }, [removeFromFilter]);

    const handleGetFilter = useCallback(
        (typeFilter: string): Filter[] | undefined => {
            return getFilter(typeFilter);
        }, [getFilter])

    const handlerClearFilter = useCallback(
        (typeFilter: string): void => {
            return clearFilter(typeFilter);
        }, [clearFilter])

    const filterParams = useMemo((): any => {
        const filtersArray = Array.from(filters, function (entry) {
            return { key: entry[0], value: entry[1] };
        });

        let params = {}
        filtersArray.forEach(({ key, value }) => {
            let newEntry = {}
            if ([FILTER_PRICE, FILTER_RATING].includes(key)) {
                if (value[0]?.values?.length)
                    newEntry = {
                        [`${key}_gte`]: value[0].values[0],
                        [`${key}_lte`]: value[0].values[1]
                    }
            } else if ([FILTER_CATEGORY, FILTER_TRADEMARK].includes(key)) {
                newEntry = { [key]: { "id_in": value.map(item => item.id) } };
            } else {
                newEntry = {
                    [key]: value[0].name
                }
            }
            params = { ...params, ...newEntry }
        })
        return params
    }, [filters])

    return {
        filters,
        handleAddToFilters,
        handleRemoveFromFilters,
        handleGetFilter,
        handlerClearFilter,
        filterParams
    }
}

export default useFilters