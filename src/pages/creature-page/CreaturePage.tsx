import React from 'react';
import styles from './CreaturePage.module.scss'
import {useAppSelector} from '../../hooks/redux';
import {useParams} from 'react-router-dom';

interface IProps {

}

export const CreaturePage: React.FC<IProps> = () => {
    const params = useParams()
    const creature = useAppSelector(state => state.creatures.creatures.find(creature => creature.name === params.name))

    if(!creature) return <div className={'ml-24'}>Такого существа нет!</div>

    return <div className={styles.creaturePage}>

    </div>
};