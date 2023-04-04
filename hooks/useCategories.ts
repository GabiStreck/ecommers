import { useEffect, useState } from 'react';

import { FILTER_CATEGORY, PER_PAGE_FILTER } from '@/constants';
import { client } from '@/graphql-client';
import { GET_CATEGORIES } from '@/queries/filters';
import { Category } from '@/types/product';

import useLocalStorage from './useLocalStorage';

interface QueryFilterResult {
  categories: Category[];
}

const useCategories = (limit = PER_PAGE_FILTER) => {
  const [loading, setLoading] = useState<boolean>();
  const [error, setError] = useState<any>();
  const [skip, setSkip] = useState<number>(0);
  const [endOfList, setEndOfList] = useState<boolean>(false);
  const [categoryStore, setCategoryStore] = useLocalStorage<Category[]>(
    FILTER_CATEGORY,
    []
  );

  const getMoreCategories = async () => {
    const offset = categoryStore?.length === 0 ? skip : skip + limit;
    const { categories: categoriesResponse } =
      await client.request<QueryFilterResult>(GET_CATEGORIES, {
        first: limit,
        skip: offset,
      });

    if (categoriesResponse.length < limit) {
      setEndOfList(true);
    }

    setSkip(offset);
    setCategoryStore([...(categoryStore ?? []), ...categoriesResponse]);
  };

  async function getCategories() {
    try {
      setLoading(true);
      if (!categoryStore?.length) {
        await getMoreCategories();
      } else {
        if (categoryStore.length % limit !== 0) setEndOfList(true);
      }
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  }

  useEffect(() => {
    getCategories();
  }, []);

  return {
    error,
    loading,
    categories: categoryStore,
    endOfList,
    getMoreCategories,
  };
};

export default useCategories;
