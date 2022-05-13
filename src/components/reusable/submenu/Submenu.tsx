import React, {useState} from 'react';
import styles from './Submenu.module.scss'
import {ISubmenuItems} from '../../../types/submenuTypes';
import {SubmenuItem} from './SubmenuItem';
import imgTriangle from '../../../assets/images/icons/triangle-icon-1.png'

export interface ISubmenuProps {
    name: string
    items: ISubmenuItems[]
}

export const Submenu: React.FC<ISubmenuProps> = ({name, items}) => {

    const [isOpened, setIsOpened] = useState(true)

    const handleHeadClick = () => {
        setIsOpened(prev => !prev)
    }

    return <div className={styles.root}>
        <button className={styles.head} onClick={handleHeadClick}>
            <div className={styles.headName}>{name}</div>
            <img className={styles.headImage + (isOpened ? '' : ' ' + styles.reversed)} src={imgTriangle} alt={'↓'}/>
        </button>
        <div className={isOpened ? '' : 'hidden'}>
            {items.map(item => <SubmenuItem key={item.name} {...item}/>)}
        </div>
    </div>
}