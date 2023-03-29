import { useCallback, useMemo } from 'react';
import { shallow } from 'zustand/shallow'
import { FILTER_CATEGORY, FILTER_GENRE, FILTER_PRICE, FILTER_RATING, FILTER_SEARCH, FILTER_TRADEMARK } from '@/constants';
import useFilterStore from '@/stores/useFilterStore';
import { AddToFilterPayload, Filter, RemovedToFilterPayload } from '@/types/filters'

const useFilters = () => {
    const {
        filters,
        search,
        genre,
        addToFilter,
        removeFromFilter,
        clearFilter,
        getFilter,
        addToGenre,
        addToSearch,
    } = useFilterStore((state) => state, shallow)

    const handleAddToFilters = useCallback(
        ({ filter, typeFilter, onlyOne }: AddToFilterPayload) => {
            addToFilter({ filter: filter, typeFilter: typeFilter, onlyOne: onlyOne });
        }, [addToFilter])

    const handleRemoveFromFilters = useCallback(
        ({ id, typeFilter }: RemovedToFilterPayload) => {
            removeFromFilter({ id: id, typeFilter: typeFilter });
        }, [removeFromFilter]);

    const handleGetFilter = useCallback(
        (typeFilter: string): Filter[] | undefined => {
            return getFilter(typeFilter);
        }, [getFilter])

    const handlerClearFilter = useCallback(
        (typeFilter: string): void => {
            clearFilter(typeFilter);
        }, [clearFilter])

    const handlerSearch = useCallback(
        (query: string): void => {
            addToSearch(query);
        }, [addToSearch])

    const handlerGenre = useCallback(
        (genre: string): void => {
            addToGenre(genre);
        }, [addToGenre])

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
        if (search) {
            params = { ...params, [FILTER_SEARCH]: search }
        }

        if (genre) {
            params = { ...params, [FILTER_GENRE]: genre }
        }
        return params
    }, [filters, search, genre])

    return {
        filters,
        handleAddToFilters,
        handleRemoveFromFilters,
        handleGetFilter,
        handlerClearFilter,
        filterParams,
        handlerSearch,
        handlerGenre
    }
}

export default useFilters