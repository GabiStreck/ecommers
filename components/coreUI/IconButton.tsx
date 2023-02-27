
import React from 'react'
import styles from '@/styles/coreUI/IconButton.module.css'


interface Props {
    action?: () => any
    title?: string
    children?: React.ReactNode
}

const IconButton: React.FC<Props> = ({ children, action, title }) => {
    return (
        <button className={styles.icon_button} title={title ?? ''} onClick={() => action ?? null}>{children}</button>
    )
}

export default IconButton