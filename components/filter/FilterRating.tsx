import useRatings from '@/hooks/useRatings';

import Filter from '../filter/Filter';

const FilterRating = () => {
    const {
        ratings,
        loading,
    } = useRatings()
    return <Filter loading={loading} title='Category' filters={ratings} />
}

export default FilterRating