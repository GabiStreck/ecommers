
import React from 'react'
import styles from '@/styles/coreUI/IconButton.module.css'


interface Props {
    action: (e: any) => any
    title?: string
    children?: React.ReactNode
    variant?: string
}

export const IconButton: React.FC<Props> = ({ children, action, title }) => {
    return (
        <button
            className={styles.icon_button}
            title={title ?? ''}
            onClick={action}
        >
            {children}
        </button>
    )
}

export const IconButtonSolid: React.FC<Props> = ({ children, action, title, variant }) => {
    return (
        <button
            className={variant == 'solid' ? styles.icon_button_solid : styles.icon_button_outline}
            title={title ?? ''}
            onClick={action}
        >
            {children}
        </button>
    )
}


export default IconButton