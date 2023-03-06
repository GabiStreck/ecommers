import { useState, useEffect } from "react";
import { client } from "@/graphql-client";
import { GET_ALL_PRODUCT } from "@/queries/product";
import { Product } from "@/types/product";
import useInfiniteScroll from "./useInfiniteScroll";

type QueryResult = {
    products: Product[];
};

const PER_PAGE = 10

const useProducts = (limit = PER_PAGE) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [skip, setSkip] = useState(0);
    const [endOfList, setEndOfList] = useState<boolean>(false);

    const { lastProductElementRef, isFetching } = useInfiniteScroll(fetchProducts);

    async function fetchProducts() {
        const offset = products.length === 0 ? skip : skip + limit;
        const { products: prodResponse } = await client.request<QueryResult>(
            GET_ALL_PRODUCT,
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