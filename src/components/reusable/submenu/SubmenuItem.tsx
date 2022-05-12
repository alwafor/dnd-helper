import React from 'react';
import styles from './Submenu.module.scss'
import {ISubmenuItems} from '../../../types/submenuTypes';

export const SubmenuItem: React.FC<ISubmenuItems> = ({name, icon, onClick, isActive}) => {

    return <button className={styles.submenuItem + (isActive ? ' ' + styles.active : '')} onClick={() => onClick()}>
        <img className={styles.submenuImage} src={icon} alt={name}/>
        <div className={styles.submenuName}>{name}</div>
    </button>
};