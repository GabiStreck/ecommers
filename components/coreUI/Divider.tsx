import React, { FC } from 'react'
import styles from '@/styles/coreUI/divider.module.css';
interface Props {
    spaceVertical?: number;
    spaceHorizontal?: number;
}

const Divider: FC<Props> = ({ spaceVertical = 20, spaceHorizontal = 0 }) => {
    return (
        <hr className={styles.divider} style={{
            marginTop: spaceVertical,
            marginBottom: spaceVertical,
            marginRight: spaceHorizontal,
            marginLeft: spaceHorizontal,
        }} />
    )
}

export default Divider