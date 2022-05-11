import React from 'react';
import styles from './Submenu.module.scss'

interface IProps {
    name: string
    img?: string
    onClick: Function
}

export const SubmenuItem: React.FC<IProps> = ({name, img, onClick}) => {
    return <button className={styles.submenuItem} onClick={() => onClick()}>
        <img className={styles.submenuImage} src={img} alt={name}/>
        <div className={styles.submenuName}>{name}</div>
    </button>
};