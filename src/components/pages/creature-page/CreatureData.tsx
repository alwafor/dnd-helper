import React from 'react';
import styles from './CreatureData.module.scss'
import {ICreatureData} from '../../../types/creatureTypes';
import {formHeadDescStr, formSpeedStr, formVisionStr, statToModifier} from '../../../utils/creatureCalculation';
import {addPlusToPositive} from '../../../utils/stringUtils';
import {difficultyToXp, percToPassivePerc} from '../../../utils/convertations';

interface IProps {
    creatureData: ICreatureData
}

export const CreatureData: React.FC<IProps> = ({creatureData}) => {

    return <div className={styles.creatureData}>
        <div className={styles.title}>{creatureData.name}</div>

        <p className={'italic'}>{formHeadDescStr(creatureData)}</p>
        <p>Место обитания: {creatureData.habitat}</p>

        <hr/>

        <img className={styles.creatureImg} src={creatureData.imageUrl} alt="creature"/>

        <p><span className={styles.red}>КД</span> {creatureData.armor}</p>
        <p><span className={styles.red}>ХП</span> {creatureData.hp}</p>
        <p><span className={styles.red}>Скорость</span> {formSpeedStr(creatureData)}</p>

        <hr/>

        <Stat name={'СИЛ'} stat={creatureData.strength}/>
        <Stat name={'ЛОВ'} stat={creatureData.agility}/>
        <Stat name={'ТЕЛ'} stat={creatureData.constitution}/>
        <Stat name={'ИНТ'} stat={creatureData.intelligence}/>
        <Stat name={'МДР'} stat={creatureData.wisdom}/>
        <Stat name={'ХАР'} stat={creatureData.charisma}/>

        <hr/>

        {creatureData.parameters.map(param => <div><span
            className={styles.highlight}>{param.name}:</span> {param.value}</div>)}

        <div><span className={styles.highlight}>Чувства: </span>{formVisionStr(creatureData)}</div>
        <div><span className={styles.highlight}>Пассивное восприятие: </span>{percToPassivePerc(creatureData.wisdom)}
        </div>
        <div>
            <span className={styles.highlight}>Сложность: </span>
            {creatureData.difficulty}
            <span className={styles.gray + ' ml-1'}>
                        {`(${difficultyToXp(+creatureData.difficulty)} XP)`}
                    </span>
        </div>

        <div className={styles.subtitle}>Действия</div>

        <hr/>

        {creatureData.actions.map(action => <div><span
            className={styles.highlight}>{action.name}:</span> {action.value}</div>)}

        <div className={styles.subtitle}>Легендарные действия</div>

        <hr/>

        {creatureData.legendaryActions.map(action => <div><span
            className={styles.highlight}>{action.name}:</span> {action.value}</div>)}
    </div>
};

const Stat: React.FC<{ stat: string, name: string }> = ({name, stat}) => {
    return <>
        <span className={styles.red}>{name} </span>
        <span className={styles.mr}>
            {stat} ({addPlusToPositive(statToModifier(stat))})
        </span>
    </>
}