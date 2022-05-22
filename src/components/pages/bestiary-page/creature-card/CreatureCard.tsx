import React from 'react';
import styles from './CreatureCard.module.scss'
import {ICreatureData} from '../../../../types/creatureTypes';
import {formHeadDescStr, getCreatureStats} from '../../../../utils/creatureCalculation';

interface IProps {
    creatureData: ICreatureData
    onClick: Function
}

export const CreatureCard: React.FC<IProps> = ({creatureData, onClick}) => {
    return <div className={styles.creatureCard} onClick={() => onClick(creatureData.name)}>
        <div className={styles.head}>
            <img src={creatureData.imageUrl} alt={'noimg'}/>
            <div className={styles.name}>{creatureData.name}</div>
        </div>
        <div className={styles.body}>
            <div className={styles.inlineStat}><span>ОЗ</span> {creatureData.hp}</div>
            <div className={styles.inlineStat}><span>КД</span> {creatureData.armor}</div>
            <div className={styles.desc}>{formHeadDescStr(creatureData)}</div>
            <div className={styles.stats}>
                {getCreatureStats(creatureData).map(stat => <div className={styles.stat}>
                    <div className={styles.statName}>{stat.name}</div>
                    <div className={styles.statValue}>{stat.value}</div>
                </div>)}

            </div>
        </div>
    </div>
};