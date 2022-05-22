import React from 'react';
import styles from './CreatureData.module.scss'
import {ICreatureData} from '../../../types/creatureTypes';
import {formHeadDescStr, formSpeedStr, statToModifier} from '../../../utils/creatureCalculation';
import {DataBlock} from './DataBlock';
import {addPlusToPositive} from '../../../utils/stringUtils';

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
        <DataBlock>
            <>
                <span>
                    <Stat name={'СИЛ'} stat={creatureData.strength}/>
                    <Stat name={'ЛОВ'} stat={creatureData.agility}/>
                    <Stat name={'ТЕЛ'} stat={creatureData.constitution}/>
                    <Stat name={'ИНТ'} stat={creatureData.intelligence}/>
                    <Stat name={'МДР'} stat={creatureData.wisdom}/>
                    <Stat name={'ХАР'} stat={creatureData.charisma}/>
                </span>
            </>
        </DataBlock>
    </div>
};

const Stat: React.FC<{stat: string, name: string}> = ({name, stat}) => {
    return <>
        <span className={styles.red}>{name} </span> <span
        className={styles.mr}>{stat} ({addPlusToPositive(statToModifier(stat))})</span>
    </>
}