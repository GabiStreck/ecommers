import { useEffect, useState } from 'react';

import { FILTER_PRICE } from '@/constants';
import { client } from '@/graphql-client';
import { GET_MAYOR_PRICE } from '@/queries/filters';

import useLocalStorage from './useLocalStorage';

interface Price {
  price: number;
}

interface Prices {
  name: string;
  values: number[];
}

interface QueryFilterResult {
  products: Price[];
}

const usePrices = () => {
  const [loading, setLoading] = useState<boolean>();
  const [error, setError] = useState<any>();
  const [priceStore, setPriceStore] = useLocalStorage<Prices[]>(
    FILTER_PRICE,
    []
  );

  async function getPrice() {
    try {
      setLoading(true);
      if (!priceStore?.length) {
        const { products: priceResponse } =
          await client.request<QueryFilterResult>(GET_MAYOR_PRICE, {});
        const value = Math.floor(priceResponse[0].price / 3 / 10) * 10;

        let listPrices: Prices[] = [0, 1, 2].map((item) => ({
          name: `$${item * value} - $${value + value * item}`,
          values: [item * value, value + value * item],
        }));

        listPrices.push({
          name: `Over $${priceResponse[0].price}`,
          values: [priceResponse[0].price],
        });

        setPriceStore(listPrices);
      }
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  }

  useEffect(() => {
    getPrice();
  }, []);

  return {
    error,
    loading,
    prices: priceStore,
  };
};

export default usePrices;
