import React from 'react'
import useTradeMarks from '@/hooks/useTradeMarks'
import { Button } from '../coreUI/Button'
import styles from '@/styles/filter/filterBar.module.css'


const FilterBar = () => {
    const { tradeMarks, loading } = useTradeMarks()
    return (
        <div className={styles.filterbar_container}>
            <Button onClick={() => { }} label='All Products' active />
            {tradeMarks?.map((item, index) =>
                <Button key={`brand-${index}`} onClick={() => { }} label={item.name} />
            )}
        </div>
    )
}

export default FilterBar