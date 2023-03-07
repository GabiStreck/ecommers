import useCategories from '@/hooks/useCategories';
import { ButtonText } from '../coreUI/Button';
import Filter from '../filter/Filter';

const FilterCategory = () => {
    const {
        categories,
        loading,
        getCategories,
        endOfList
    } = useCategories()
    return <Filter loading={loading} title='Category' filters={categories} >
        {!endOfList && <ButtonText label='Load more' onClick={getCategories} />}
    </Filter>
}

export default FilterCategory