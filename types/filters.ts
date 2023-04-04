export interface Filter {
  id: string;
  name: string;
  values?: number[];
}

export interface FilterStore {
  filters: Map<string, Filter[]>;
  search: string;
  genre: string;
  addToFilter: ({ filter, typeFilter }: AddToFilterPayload) => void;
  addToSearch: (query: string) => void;
  addToGenre: (genre: string) => void;
  removeFromFilter: ({ id, typeFilter }: RemovedToFilterPayload) => void;
  clearFilter: (typeFilter: string) => void;
  getFilter: (typeFilter: string) => Filter[] | undefined;
}

export interface AddToFilterPayload {
  filter: Filter;
  typeFilter: string;
  onlyOne: boolean;
}

export interface RemovedToFilterPayload {
  id: string;
  typeFilter: string;
}
