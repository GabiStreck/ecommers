import React from 'react'
import FilterItem from './FilterItem'
import styles from '@/styles/filter/filter.module.css'

interface Props {
    title: string
    filters: any[]
    children?: React.ReactNode,
    multiselect?: boolean,
    loading?: boolean
}


const Filter: React.FC<Props> = ({ title, filters, multiselect, children, loading }) => {
    if (loading) {
        return <div>loading..</div>
    }
    return (
        <form className={styles.filter_container}>
            <h1 className={styles.filter_title}>{title}</h1>
            <ul className={styles.filter_list}>
                {filters?.map((filter, index) => (
                    <FilterItem
                        name={title.trim().toLowerCase()}
                        label={filter.name}
                        id={filter.id}
                        key={filter.id ?? `${title}-${index}-filterItem`}
                        type={multiselect ? 'checkbox' : 'radio'}
                    />
                ))}
            </ul>
            <div>
                {children}
            </div>
        </form>
    )
}

export default Filter