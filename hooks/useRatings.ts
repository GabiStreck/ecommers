import { useEffect, useState } from 'react';

import { FILTER_RATING } from '@/constants';
import { client } from '@/graphql-client';
import { GET_RATINGS } from '@/queries/filters';

import useLocalStorage from './useLocalStorage';

interface RatingsResponse {
  rating: number;
}

interface Ratings {
  name: string;
  values: number[];
  id: number;
}

interface QueryFilterResult {
  products: RatingsResponse[];
}

const useRatings = () => {
  const [loading, setLoading] = useState<boolean>();
  const [error, setError] = useState<any>();
  const [ratingStore, setRatingStore] = useLocalStorage<Ratings[]>(
    FILTER_RATING,
    []
  );

  async function getRatings() {
    try {
      setLoading(true);
      if (!ratingStore?.length) {
        const { products: ratingResponse } =
          await client.request<QueryFilterResult>(GET_RATINGS, {});
        const ratingList = new Set(
          ratingResponse.map((item) => Math.floor(item.rating))
        );
        const ratingData = Array.from(ratingList).map((item) => ({
          name: `${item} star`,
          id: item,
          values: [item, item + 1],
        }));
        setRatingStore(ratingData);
      }
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  }

  useEffect(() => {
    getRatings();
  }, []);

  return {
    error,
    loading,
    ratings: ratingStore,
  };
};

export default useRatings;
