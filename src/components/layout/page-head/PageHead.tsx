import React from 'react'
import styles from './PageHead.module.css'

interface IProps {
    img: string,
    title: string
}

export const PageHead: React.FC<IProps> = ({img, title}) => {
    return <div className={styles.head}>
        <img className={styles.headImg} src={img} alt="image"/>
        <div className={styles.title}>{title}</div>
    </div>
}