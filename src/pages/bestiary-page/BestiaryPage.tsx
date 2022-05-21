import React from 'react';
import styles from './BestiaryPage.module.scss'
import imgWolf from './../../assets/images/big/wolf.png'
import {CreatureCard} from '../../components/pages/bestiary-page/creature-card/CreatureCard';
import {useAppSelector} from '../../hooks/redux';

export const BestiaryPage: React.FC = () => {

    const allCreatures = useAppSelector(state => state.creatures.creatures)

    return <div className={styles.bestiaryPage}>
        <div className={styles.head}>
            <img className={styles.headImg} src={imgWolf} alt="Bestiary"/>
            <div className={styles.title}>Бестиарий</div>
        </div>
        <div className={styles.creaturesWrapper}>
            {allCreatures.map(creature => <CreatureCard key={creature.name} creatureData={creature}/>)}
        </div>
    </div>
};