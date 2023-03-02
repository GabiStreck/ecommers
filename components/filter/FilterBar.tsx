import React from 'react'
import { Button } from '../coreUI/Button'
import styles from '@/styles/filter/filterBar.module.css'

interface Props {
    filters: any[]
}

const FilterBar: React.FC<Props> = ({ filters }) => {
    return (
        <div className={styles.filterbar_container}>
            <Button onClick={() => { }} label='All Products' active />
            {filters?.map((item, index) => <Button key={`brand-${index}`} onClick={() => { }} label={item.name} />)}
        </div>
    )
}

export default FilterBar