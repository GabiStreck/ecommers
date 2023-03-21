
import { create } from 'zustand';
import { FilterStore, AddToFilterPayload, Filter, removedToFilterPayload } from '@/types/filters';

const useFilterStore = create<FilterStore>((set, get) => ({
    filters: new Map(),
    addToFilter: ({ filter, typeFilter, onlyOne }: AddToFilterPayload): void => {
        const { filters } = get()
        let draft = structuredClone(filters)

        if (draft.has(typeFilter) && !onlyOne) {
            /* @ts-ignore */
            const draftFilter: Filter[] = draft.get(typeFilter)
            draftFilter.push(filter)
            draft.set(typeFilter, draftFilter)

        } else {
            draft.delete(typeFilter)
            draft.set(typeFilter, [filter])
        }
        set(() => ({
            filters: draft
        }));
    },
    removeFromFilter: ({ id, typeFilter }: removedToFilterPayload): void => {
        const { filters } = get()
        let draft = structuredClone(filters)

        if (draft.has(typeFilter)) {
            /* @ts-ignore */
            const draftFilter: Filter[] = draft.get(typeFilter)
            const newDrafFilters = draftFilter.filter(item => item.id !== id)
            if (newDrafFilters.length === 0) {
                draft.delete(typeFilter)
            } else {
                draft.set(typeFilter, newDrafFilters)
            }
            set(() => ({
                filters: draft
            }));
        }
    },
    clearFilter: (typeFilter: string): void => {
        const { filters } = get()
        let draft = structuredClone(filters)

        if (draft.has(typeFilter)) {
            draft.delete(typeFilter)
            set(() => ({
                filters: draft
            }));
        }
    },
    getFilter: (typeFilter: string): Filter[] | undefined => {
        const { filters } = get()
        if (!filters.size) return
        let draft = structuredClone(filters)
        if (draft.has(typeFilter)) {
            return draft.get(typeFilter)
        }
        return;
    },
}));

export default useFilterStore;
