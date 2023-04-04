import { useEffect, useState } from 'react';

import { FILTER_TRADEMARK } from '@/constants';
import { client } from '@/graphql-client';
import { GET_TRADEMARKS } from '@/queries/filters';
import { TradeMark } from '@/types/product';

import useLocalStorage from './useLocalStorage';

interface QueryFilterResult {
  tradeMarks: TradeMark[];
}

const useTradeMarks = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>();
  const [tradeMarkStore, setTradeMarkStore] = useLocalStorage<TradeMark[]>(
    FILTER_TRADEMARK,
    []
  );
  async function getAllTradeMarks() {
    try {
      setLoading(true);
      if (!tradeMarkStore?.length) {
        const { tradeMarks: tradeMarkResponse } =
          await client.request<QueryFilterResult>(GET_TRADEMARKS, {});

        setTradeMarkStore(tradeMarkResponse);
      }

      setLoading(false);
    } catch (error) {
      setError(error);
    }
  }

  useEffect(() => {
    getAllTradeMarks();
  }, []);

  return {
    error,
    loading,
    tradeMarks: tradeMarkStore,
  };
};

export default useTradeMarks;
