import { useState, useEffect } from "react";
import { client } from "@/graphql-client";
import useInfiniteScroll from "./useInfiniteScroll";
import { GET_PRODUCTS } from "@/queries/product";
import { Product } from "@/types/product";
import { PER_PAGE } from "@/constants";

type QueryResult = {
    products: Product[];
};

const useProducts = (limit = PER_PAGE) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [skip, setSkip] = useState(0);
    const [endOfList, setEndOfList] = useState<boolean>(false);

    const { lastProductElementRef, isFetching } = useInfiniteScroll(fetchProducts);

    async function fetchProducts() {
        try {
            const offset = products.length === 0 ? skip : skip + limit;
            const { products: prodResponse } = await client.request<QueryResult>(
                GET_PRODUCTS,
                {
                    first: limit,
                    skip: offset,
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

    useEffect(() => {
        fetchProducts();
    }, []);

    return {
        products,
        lastProductElementRef,
        isFetching,
        endOfList
    }
}

export default useProducts