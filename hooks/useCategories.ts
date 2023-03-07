import { useEffect, useState } from 'react'
import { client } from '@/graphql-client'
import { Category } from '@/types/product';
import { GET_CATEGORIES } from '@/queries/filters';
import { PER_PAGE_FILTER } from '@/constants';

interface QueryFilterResult {
    categories: Category[];
};

const useCategories = (limit = PER_PAGE_FILTER) => {
    const [categories, setCategories] = useState<Category[]>([])
    const [loading, setLoading] = useState<boolean>()
    const [error, setError] = useState<any>()
    const [skip, setSkip] = useState<number>(0);
    const [endOfList, setEndOfList] = useState<boolean>(false);

    async function getCategories() {
        try {
            setLoading(true)
            const offset = categories.length === 0 ? skip : skip + limit;
            const { categories: categoriesResponse } = await client.request<QueryFilterResult>(
                GET_CATEGORIES, {
                first: limit,
                skip: offset
            }
            )
            if (categoriesResponse.length < limit) {
                setEndOfList(true);
            }

            setSkip(offset);
            setCategories([...categories, ...categoriesResponse])
            setLoading(false)
        } catch (error) {
            setError(error)
        }
    }

    useEffect(() => {
        getCategories()
    }, [])

    return {
        error,
        loading,
        categories,
        endOfList,
        getCategories
    }
}



export default useCategories