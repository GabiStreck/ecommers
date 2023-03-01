import React from 'react'
import styles from '@/styles/filter/filteritem.module.css'

interface Props {
    id: string
    type?: string
    label: string
    name: string
    checked?: boolean
    onSelected?: () => any
}

const FilterItem: React.FC<Props> = ({ type,
    label,
    name,
    id,
    checked,
    onSelected
}) => {
    return (
        <div className={styles.filteritem_container}>
            <input
                id={`filter-${id}`}
                name={name}
                type={type == 'radio' ? 'radio' : 'checkbox'}
                className={styles.radio_custom}
                checked={checked}
                onChange={onSelected}
            />
            <label
                htmlFor={`filter-${id}`}
                className={styles.radio_custom_label} >
                {label}
            </label>
        </div>
    )
}

export default FilterItem