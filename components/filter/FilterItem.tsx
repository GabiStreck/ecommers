import { FC, memo, useId } from 'react';

import styles from '@/styles/filter/Filteritem.module.css';

interface Props {
  id: string;
  type?: string;
  label: string;
  name: string;
  checked?: boolean;
  onSelected?: () => any;
}

const FilterItem: FC<Props> = memo(
  ({ type, label, name, checked, onSelected }) => {
    const idInput = useId();
    return (
      <div className={styles.filteritem_container}>
        <input
          id={idInput}
          name={name}
          type={type == 'radio' ? 'radio' : 'checkbox'}
          className={styles.radio_custom}
          checked={checked}
          onChange={onSelected}
        />
        <label htmlFor={idInput} className={styles.radio_custom_label}>
          {label}
        </label>
      </div>
    );
  },
  (prevProps, nextProps) => prevProps.checked === nextProps.checked
);

export default FilterItem;
