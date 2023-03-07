import { useEffect, useState } from 'react'
import { client } from '@/graphql-client'
import { Color } from '@/types/product';
import { GET_CATEGORIES } from '@/queries/filters';
import { PER_PAGE_FILTER } from '@/constants';

interface QueryFilterResult {
    products: Color[];
};

const useColors = (limit = PER_PAGE_FILTER) => {
    const [colors, setColors] = useState<Color[]>([])
    const [loading, setLoading] = useState<boolean>()
    const [error, setError] = useState<any>()
    const [skip, setSkip] = useState<number>(0);
    const [endOfList, setEndOfList] = useState<boolean>(false);

    async function getColors() {
        try {
            setLoading(true)
            const offset = colors.length === 0 ? skip : skip + limit;
            const { products: colorsResponse } = await client.request<QueryFilterResult>(
                GET_CATEGORIES, {
                first: limit,
                skip: offset
            }
            )
            if (colorsResponse.length < limit) {
                setEndOfList(true);
            }

            setSkip(offset);
            setColors([...colors, ...colorsResponse])
            setLoading(false)
        } catch (error) {
            setError(error)
        }
    }

    useEffect(() => {
        getColors()
    }, [])

    return {
        error,
        loading,
        colors,
        endOfList
    }
}



export default useColors