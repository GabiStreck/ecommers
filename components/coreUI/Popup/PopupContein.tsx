import React, { FC, ReactNode } from 'react'
import styles from '@/styles/coreUI/popup.module.css'

interface Props {
    children: ReactNode
}

const PopupContein: FC<Props> = ({ children }) => {
    return (
        <div className={styles.popup_container}>
            <ul className={styles.popup_list}>
                {children}
            </ul>
        </div>
    )
}

export default PopupContein