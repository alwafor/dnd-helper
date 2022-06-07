import React from 'react'
import styles from './PageHead.module.css'

interface IProps {
    img: string,
    title: string,
    style?: any
}

export const PageHead: React.FC<IProps> = ({img, title, style = {}}) => {
    return <div className={styles.head}>
        <img className={styles.headImg} style={{...style}} src={img} alt="image"/>
        <div className={styles.title}>{title}</div>
    </div>
}