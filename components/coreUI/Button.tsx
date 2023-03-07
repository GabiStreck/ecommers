import React from 'react'
import styles from '@/styles/coreUI/button.module.css'

interface Props {
    label: string
    active?: boolean
    onClick: () => void
}

export const Button: React.FC<Props> = ({ label, onClick, active }) => {
    return (
        <button className={active ? styles.button_active : styles.button} onClick={onClick}>{label}</button>
    )
}

export const ButtonText: React.FC<Props> = ({ label, onClick }) => {
    return (
        <button className={styles.button_text} onClick={onClick}>{label}</button>
    )
}

