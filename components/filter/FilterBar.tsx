import React from 'react'
import useTradeMarks from '@/hooks/useTradeMarks'
import { Button } from '../coreUI/Button'
import styles from '@/styles/filter/filterBar.module.css'
import useFilters from '@/hooks/useFilters'
import { FILTER_TRADEMARK } from '@/constants'
import { TradeMark } from '@/types/product'
import { LoadingFilterBarList } from '../loading/LoadingFilters'


const FilterBar = () => {
    const { tradeMarks, loading } = useTradeMarks()
    const { handleAddToFilters, handleGetFilter, handlerClearFilter, handleRemoveFromFilters } = useFilters()
    const selectedList = handleGetFilter(FILTER_TRADEMARK)

    const handleSelectTrade = (trade: TradeMark) => {
        if (selectedList?.some(elem => elem.id === trade.id))
            handleRemoveFromFilters({
                typeFilter: FILTER_TRADEMARK,
                id: trade.id
            })
        else {
            handleAddToFilters({
                typeFilter: FILTER_TRADEMARK,
                filter: trade,
                onlyOne: false
            })
        }

    }

    if (loading) return <LoadingFilterBarList quantity={8} />

    return (
        <div className={styles.filterbar_container}>
            <Button onClick={() => handlerClearFilter(FILTER_TRADEMARK)} label='All Products' active={!selectedList} />
            {tradeMarks?.map(trade =>
                <Button
                    key={`brand-${trade.id}`}
                    onClick={() => handleSelectTrade(trade)}
                    active={selectedList?.some(elem => elem.id === trade.id)}
                    label={trade.name}
                />
            )}
        </div>
    )
}

export default FilterBar