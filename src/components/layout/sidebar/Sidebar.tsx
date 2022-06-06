import React from 'react';
import styles from './Sidebar.module.css'
import {ISubmenuProps, Submenu} from '../../reusable/submenu/Submenu';
import imgEye from '../../../assets/images/icons/creature-icon-1.svg'
import imgWolf from '../../../assets/images/icons/creature-icon-2.svg'
import imgSave from '../../../assets/images/icons/diskette-icon.png'

import {useNavigate} from 'react-router-dom';
import {useAppDispatch} from '../../../hooks/redux'
import {changeFormValues} from '../../../redux/reducers/createCreatureReducer'
import {createCreatureDefaultValues} from '../../../contants/hookFormConstants'

interface IProps {

}

export const Sidebar: React.FC<IProps> = () => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const navigateTo = (path: string) => () => navigate(path)

    const menuItems: ISubmenuProps[] = [
        {
            name: 'Существа',
            items: [
                {
                    icon: imgEye,
                    name: 'Создать существо',
                    onClick: () => {
                        dispatch(changeFormValues(createCreatureDefaultValues))
                        navigate('create-creature')
                    },
                    isActive: window.location.pathname === '/create-creature'
                },
                {
                    icon: imgWolf,
                    name: 'Бестиарий',
                    onClick: navigateTo('bestiary'),
                    isActive: window.location.pathname === '/bestiary'
                }
            ]
        },
        {
            name: 'Дополнительно',
            items: [
                {
                    icon: imgSave,
                    name: 'Сохранение',
                    onClick: navigateTo('/save'),
                    isActive: window.location.pathname === 'save'
                }
            ]
        }
    ]

    return <div className={styles.root}>
        <div className={styles.appTitle}>
            DnD Helper
        </div>
        <div className={styles.menu}>
            {menuItems.map(menuElement => <Submenu key={menuElement.name} {...menuElement}/>)}
        </div>
    </div>
};