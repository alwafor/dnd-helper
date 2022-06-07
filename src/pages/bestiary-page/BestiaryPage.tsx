import React from 'react';
import styles from './BestiaryPage.module.css'
import imgWolf from './../../assets/images/big/wolf.png'
import {CreatureCard} from '../../components/pages/bestiary-page/creature-card/CreatureCard';
import {useAppSelector} from '../../hooks/redux';
import {useNavigate} from 'react-router-dom';
import {PageHead} from '../../components/layout/page-head/PageHead'

export const BestiaryPage: React.FC = () => {

    const allCreatures = useAppSelector(state => state.creatures.creatures)
    const navigate = useNavigate()

    const handleCreatureCardClick = (creatureName: string) => {
        navigate(`/creature/${creatureName}`)
    }

    return <div className={styles.bestiaryPage}>
        <PageHead img={imgWolf}/>
        <div className={styles.creaturesWrapper}>
            {allCreatures.map(creature => <CreatureCard onClick={handleCreatureCardClick} key={creature.name}
                                                        creatureData={creature}/>)}
        </div>
    </div>
};