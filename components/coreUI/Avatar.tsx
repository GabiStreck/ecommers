import React from 'react'
import styles from '@/styles/coreUI/avatar.module.css'

interface Props {
    src?: string
    alt?: string
}

const Avatar: React.FC<Props> = ({ src, alt }) => {
    return (
        <div>
            <img src={src} alt={alt} className={styles.avatar} />
        </div>
    )
}

export default Avatar