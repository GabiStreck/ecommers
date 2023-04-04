import { FC, ReactNode, useRef } from 'react';
import { TrashIcon } from '@heroicons/react/24/outline';

import useFilters from '@/hooks/useFilters';
import styles from '@/styles/filter/Filter.module.css';

import IconButton from '../coreUI/IconButton';

interface Props {
  title: string;
  children?: ReactNode;
  showResetForm?: boolean;
  typeFilter: string;
}

const FilterContainer: FC<Props> = ({
  title,
  children,
  showResetForm,
  typeFilter,
}) => {
  const { handlerClearFilter } = useFilters();

  const formRef = useRef<HTMLFormElement>(null);
  const handleFormReset = (e: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    handlerClearFilter(typeFilter);
    formRef.current?.reset();
  };

  return (
    <form className={styles.filter_container} ref={formRef}>
      <div className={styles.title_container}>
        <h1 className={styles.filter_title}>{title}</h1>
        {showResetForm && (
          <IconButton action={(e) => handleFormReset(e)} title="Remove filters">
            <TrashIcon width={15} height={15} color="#FF3131" />
          </IconButton>
        )}
      </div>

      <ul className={styles.filter_list}>{children}</ul>
    </form>
  );
};

export default FilterContainer;
