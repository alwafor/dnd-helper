import React from 'react';
import styles from './Sidebar.module.css'
import {ISubmenuProps, Submenu} from '../../reusable/submenu/Submenu';
import imgEye from '../../../assets/images/icons/creature-icon-1.svg'
import imgWolf from '../../../assets/images/icons/creature-icon-2.svg'

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