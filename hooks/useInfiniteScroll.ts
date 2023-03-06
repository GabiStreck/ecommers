
import { useRef, useState, useCallback } from "react";

const useInfiniteScroll = (fetchMore: () => Promise<void>) => {
    const [isFetching, setIsFetching] = useState(false);
    const observer = useRef<IntersectionObserver | null>(null);

    const lastProductElementRef = useCallback(
        (node: HTMLDivElement) => {
            if (isFetching || !node) return;

            if (observer.current) observer.current.disconnect();

            observer.current = new IntersectionObserver(async (entries) => {
                if (entries[0].isIntersecting) {
                    setIsFetching(true);
                    await fetchMore();
                    setIsFetching(false);
                }
            });

            observer.current.observe(node);
        },
        [fetchMore, isFetching]
    );

    return { lastProductElementRef, isFetching };
};

export default useInfiniteScroll