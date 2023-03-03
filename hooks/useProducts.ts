
import { useMemo, useState } from 'react'
import { client } from '@/graphql-client'
import { GET_ALL_PRODUCT } from '@/queries/product'
import { Product } from '@/types/product'

export const useProducts = () => {
    const [products, setProducts] = useState<Product[] | []>()
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<any>()

    useMemo(() => {
        try {
            setLoading(true)
            client.request(GET_ALL_PRODUCT, {}).then((res: any) => {
                setProducts(res?.products)
            })
        } catch (e) {
            setError(e)
        } finally {
            setLoading(false)
        }
    }, [])

    return {
        products,
        loading,
        error
    }
}
