import React from 'react'
import styles from './PageHead.module.css'

interface IProps {
    img: string
}

export const PageHead: React.FC<IProps> = ({img}) => {
    return <div className={styles.head}>
        <img className={styles.headImg} src={img} alt="Bestiary"/>
        <div className={styles.title}>Бестиарий</div>
    </div>
}