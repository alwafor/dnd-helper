import React from 'react';
import styles from './CreatureData.module.scss'
import {ICreatureData} from '../../../types/creatureTypes';
import {formHeadDescStr, formSpeedStr} from '../../../utils/creatureCalculation';
import {DataBlock} from './DataBlock';

interface IProps {
    creatureData: ICreatureData
}

export const CreatureData: React.FC<IProps> = ({creatureData}) => {

    return <div className={styles.creatureData}>
        <div className={styles.title}>{creatureData.name}</div>
        <DataBlock>
            <>
                <p className={'italic'}>{formHeadDescStr(creatureData)}</p>
                <p>Место обитания: {creatureData.habitat}</p>
            </>
        </DataBlock>
        <DataBlock>
            <>
                <p><span className={styles.red}>КД</span> {creatureData.armor}</p>
                <p><span className={styles.red}>ХП</span> {creatureData.hp}</p>
                <p><span className={styles.red}>Скорость</span> {formSpeedStr(creatureData)}</p>
            </>
        </DataBlock>
    </div>
};