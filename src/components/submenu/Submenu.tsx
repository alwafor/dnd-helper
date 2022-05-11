import React from 'react';
import styles from './Submenu.module.scss'
import {ISubmenuItems} from '../../types/submenuTypes';
import {SubmenuItem} from './SubmenuItem';
import imgTriangle from './../../assets/images/icons/triangle-icon-1.png'

export interface ISubmenuProps {
    name: string
    items: ISubmenuItems[]
}

export const Submenu: React.FC<ISubmenuProps> = ({name, items}) => {

    return <div className={styles.root}>
        <div className={styles.head}>
            <div className={styles.headName}>{name}</div>
            <img className={styles.headImage} src={imgTriangle} alt={'↓'}/>
        </div>

        {items.map(item => <SubmenuItem name={item.name} img={item.icon} onClick={item.onClick}/>)}
    </div>
}