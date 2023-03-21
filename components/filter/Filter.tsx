import React, { useImperativeHandle, useRef } from 'react'
import FilterItem from './FilterItem'
import useFilters from '@/hooks/useFilters'
import { Filter } from '@/types/filters'
import FilterContainer from './FilterContainer'

interface Props {
    title: string;
    filters: any[];
    children?: React.ReactNode;
    multiselect?: boolean;
    loading?: boolean;
    typeFilter: string;
}

const Filter: React.FC<Props> = ({
    title,
    filters,
    multiselect,
    children,
    loading,
    typeFilter
}) => {
    const {
        handleAddToFilters,
        handleGetFilter,
        handleRemoveFromFilters
    } = useFilters()
    const selectedFilter = handleGetFilter(typeFilter)?.shift()

    const handleSelectedFilter = (filter: Filter) => {
        if (!multiselect) {
            if (selectedFilter?.id === filter.id) {
                handleRemoveFromFilters({ id: filter.id, typeFilter: typeFilter })
            }
            handleAddToFilters({ filter, typeFilter: typeFilter, onlyOne: true })
        } else {
            const isSelected = handleGetFilter(typeFilter)?.find(item => item.id === filter.id)

            if (isSelected?.id === filter.id) {
                handleRemoveFromFilters({ id: filter.id, typeFilter: typeFilter })
            }
            handleAddToFilters({ filter, typeFilter: typeFilter, onlyOne: false })
        }
    }

    return (
        <FilterContainer
            title={title}
            loading={loading}
            showResetForm={!!selectedFilter}
            typeFilter={typeFilter}
        >
            {filters?.map((filter, index) => (
                <FilterItem
                    name={title.trim().toLowerCase()}
                    label={filter.name}
                    id={filter.id}
                    key={filter.id ?? `${title.trim().toLowerCase()}-${index}-filterItem`}
                    type={multiselect ? 'checkbox' : 'radio'}
                    checked={selectedFilter?.id === filter.id}
                    onSelected={() => handleSelectedFilter(filter)}
                />
            ))}
            <div>
                {children}
            </div>
        </FilterContainer >
    )
}

export default Filter