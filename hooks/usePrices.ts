import { useEffect, useState } from 'react'
import { client } from '@/graphql-client'
import { GET_MAYOR_PRICE } from '@/queries/filters';

interface Price {
    price: number
}

interface Prices {
    name: string
}

interface QueryFilterResult {
    products: Price[];
};

const usePrices = () => {
    const [prices, setPrice] = useState<Prices[]>([])
    const [loading, setLoading] = useState<boolean>()
    const [error, setError] = useState<any>()

    async function getPrice() {
        try {
            setLoading(true)
            const { products: priceResponse } = await client.request<QueryFilterResult>(
                GET_MAYOR_PRICE, {}
            )
            const value = Math.floor(priceResponse[0].price / 3 / 10) * 10

            let listPrices: Prices[] = [0, 1, 2].map(item => (
                { name: `$${item * value} - $${value + value * item}` }
            ))

            listPrices.push({ name: `Over $${priceResponse[0].price}` })

            setPrice(listPrices)
            setLoading(false)
        } catch (error) {
            setError(error)
        }
    }

    useEffect(() => {
        getPrice()
    }, [])

    return {
        error,
        loading,
        prices
    }
}



export default usePrices