import { useEffect, useState } from 'react'
import { client } from '@/graphql-client'
import { TradeMark } from '@/types/product';
import { GET_TRADEMARKS } from '@/queries/filters';

interface QueryFilterResult {
    tradeMarks: TradeMark[];
};

const useTradeMarks = () => {
    const [tradeMarks, setTradeMarks] = useState<TradeMark[]>()
    const [loading, setLoading] = useState<boolean>()
    const [error, setError] = useState<any>()

    async function getAllTradeMarks() {
        try {
            setLoading(true)
            const { tradeMarks: tradeMarkResponse } = await client.request<QueryFilterResult>(
                GET_TRADEMARKS, {}
            )
            setTradeMarks(tradeMarkResponse)
        } catch (error) {
            setError(error)
        }
    }

    useEffect(() => {
        getAllTradeMarks()
    }, [])

    return {
        error,
        loading,
        tradeMarks
    }
}



export default useTradeMarks