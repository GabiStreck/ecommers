import { FC, memo, useId } from 'react';

import { PER_PAGE_FILTER } from '@/constants';
import styles from '@/styles/filter/Filter.module.css';
import stylesBar from '@/styles/filter/FilterBar.module.css';

import { CircleSkeleton, RectangleSkeleton } from './LoadingSkeleton';

interface Props {
  quantity?: number;
}

const LoadingFilterItem = memo(() => {
  return (
    <div className={stylesBar.filterbar_container}>
      <CircleSkeleton size="20px" />
      <RectangleSkeleton width="80px" height="20px" rounded="4px" />
    </div>
  );
});

const LoadingFilterItemList: FC<Props> = memo(
  ({ quantity = PER_PAGE_FILTER }) => {
    const id = useId();
    return (
      <>
        {Array.from(Array(quantity).keys())?.map((item) => (
          <LoadingFilterItem key={`filteritemloading-${item}-${id}`} />
        ))}
      </>
    );
  }
);

const LoadingFilterList = memo(() => {
  return (
    <div className={styles.filter_container}>
      <div className={styles.title_container}>
        <RectangleSkeleton width="80px" height="20px" rounded="4px" />
      </div>
      <div className={styles.filter_list}>
        <LoadingFilterItemList />
      </div>
    </div>
  );
});

const LoadingFilterBarList: FC<Props> = memo(
  ({ quantity = PER_PAGE_FILTER }) => {
    return (
      <div className={stylesBar.filterbar_container}>
        {Array.from(Array(quantity).keys())?.map((item) => (
          <RectangleSkeleton
            width="90px"
            height="36px"
            rounded="8px"
            key={`filterbarloading-${item}`}
          />
        ))}
      </div>
    );
  }
);

export {
  LoadingFilterItem,
  LoadingFilterList,
  LoadingFilterBarList,
  LoadingFilterItemList,
};
