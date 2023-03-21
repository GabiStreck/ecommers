
import useFilterStore from '@/stores/useFilterStore';
import { AddToFilterPayload, Filter, removedToFilterPayload } from '@/types/filters'
import { useCallback } from 'react';
import { shallow } from 'zustand/shallow'

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

    return {
        filters,
        handleAddToFilters,
        handleRemoveFromFilters,
        handleGetFilter,
        handlerClearFilter
    }
}

export default useFilters