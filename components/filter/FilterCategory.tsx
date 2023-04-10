import useCategories from '@/hooks/useCategories';
import { FILTER_CATEGORY } from '@/constants';
import { ButtonText } from '../coreUI/Button';
import Filter from '../filter/Filter';

const FilterCategory = () => {
  const { categories, loading, getMoreCategories, endOfList } = useCategories();

  return (
    <Filter
      loading={loading}
      title="Category"
      filters={categories}
      typeFilter={FILTER_CATEGORY}
    >
      {!endOfList && (
        <ButtonText label="Load more" onClick={getMoreCategories} />
      )}
    </Filter>
  );
};

export default FilterCategory;
