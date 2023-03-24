import { useState, useEffect, startTransition } from "react";
import { client } from "@/graphql-client";
import useInfiniteScroll from "./useInfiniteScroll";
import { GET_PRODUCTS } from "@/queries/product";
import { Product } from "@/types/product";
import { PER_PAGE } from "@/constants";
import useFilters from "./useFilters";

type QueryResult = {
    products: Product[];
};

const useProducts = (limit = PER_PAGE) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [skip, setSkip] = useState(0);
    const [endOfList, setEndOfList] = useState<boolean>(false);
    const { lastProductElementRef, isFetching } = useInfiniteScroll(getMoreProducts);
    const { filterParams } = useFilters()

    async function getMoreProducts() {
        try {
            const offset = products.length === 0 ? skip : skip + limit;
            const { products: prodResponse } = await client.request<QueryResult>(
                GET_PRODUCTS,
                {
                    first: limit,
                    skip: offset,
                    filters: filterParams ?? {}
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
            const offset = 0;
            const { products: prodResponse } = await client.request<QueryResult>(
                GET_PRODUCTS,
                {
                    first: limit,
                    skip: offset,
                    filters: filterParams ?? {}
                }
            );
            if (prodResponse.length < limit) {
                setEndOfList(true);
            }
            setProducts(prodResponse);
            setSkip(offset);
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        getProducts()
    }, [filterParams]);

    return {
        products,
        lastProductElementRef,
        isFetching,
        endOfList
    }
}

export default useProducts