import { useEffect, useState } from 'react'
import { client } from '@/graphql-client'
import { GET_RATINGS } from '@/queries/filters';

interface RatingsResponse {
    rating: number
}

interface Ratings {
    name: string,
    id: number
}

interface QueryFilterResult {
    products: RatingsResponse[];
};

const useRatings = () => {
    const [ratings, setRatings] = useState<Ratings[]>([])
    const [loading, setLoading] = useState<boolean>()
    const [error, setError] = useState<any>()

    async function getRatings() {
        try {
            setLoading(true)
            const { products: ratingResponse } = await client.request<QueryFilterResult>(
                GET_RATINGS, {}
            )
            const ratingList = new Set(ratingResponse.map(item => (Math.floor(item.rating))))
            setRatings(Array.from(ratingList).map(item => ({ name: `${item} star`, id: item })))
            setLoading(false)
        } catch (error) {
            setError(error)
        }
    }

    useEffect(() => {
        getRatings()
    }, [])

    return {
        error,
        loading,
        ratings
    }
}



export default useRatings