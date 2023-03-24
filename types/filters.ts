
export interface Filter {
    id: string;
    name: string;
    values?: number[]
}

export interface FilterStore {
    filters: Map<string, Filter[]>;
    addToFilter: ({ filter, typeFilter }: AddToFilterPayload) => void;
    removeFromFilter: ({ id, typeFilter }: removedToFilterPayload) => void;
    clearFilter: (typeFilter: string) => void;
    getFilter: (typeFilter: string) => Filter[] | undefined;
}

export interface AddToFilterPayload {
    filter: Filter;
    typeFilter: string;
    onlyOne: boolean;
}

export interface removedToFilterPayload {
    id: string;
    typeFilter: string
}
