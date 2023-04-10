import { useEffect, useState } from 'react';

import { client } from '@/graphql-client';
import { GET_PRODUCTS } from '@/queries/product';
import { PER_PAGE } from '@/constants';
import { Product } from '@/types/product';

import useFilters from './useFilters';
import useInfiniteScroll from './useInfiniteScroll';

type QueryResult = {
  products: Product[];
};

const useProducts = (limit = PER_PAGE) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [skip, setSkip] = useState(0);
  const [endOfList, setEndOfList] = useState<boolean>(false);
  const { lastProductElementRef, isFetching } =
    useInfiniteScroll(getMoreProducts);
  const { filterParams } = useFilters();

  async function getMoreProducts() {
    try {
      const offset = products.length === 0 ? skip : skip + limit;
      const { products: prodResponse } = await client.request<QueryResult>(
        GET_PRODUCTS,
        {
          first: limit,
          skip: offset,
          filters: filterParams ?? {},
        }
      );
      if (prodResponse.length < limit) {
        setEndOfList(true);
      }
      setProducts([...products, ...prodResponse]);
      setSkip(offset);
    } catch (error) {
      console.log(error);
    }
  }

  async function getProducts() {
    try {
      setLoading(true);
      const offset = 0;
      const { products: prodResponse } = await client.request<QueryResult>(
        GET_PRODUCTS,
        {
          first: limit,
          skip: offset,
          filters: filterParams ?? {},
        }
      );
      if (prodResponse.length < limit) {
        setEndOfList(true);
      }
      setProducts(prodResponse);
      setSkip(offset);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProducts();
  }, [filterParams]);

  return {
    products,
    lastProductElementRef,
    isFetching,
    endOfList,
    loading,
  };
};

export default useProducts;
