import React from 'react';
import styles from './CreatureData.module.scss'
import {ICreatureData, INameValue} from '../../../types/creatureTypes';
import {
    formHeadDescStr,
    formSaveThrowStr,
    formSpeedStr,
    formVisionStr, isThereSaveThrows,
    statToModifier
} from '../../../utils/creatureCalculation';
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
        <div className={styles.imgHolder}>
            <img className={styles.creatureImg} src={creatureData.imageUrl} alt="creature"/>
        </div>

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

        {isThereSaveThrows(creatureData) && <div><span className={styles.bold}>Спасброски</span> {formSaveThrowStr(creatureData)}</div>}

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

        {creatureData.actions.length > 0
            && <Actions title={'Действия'} actions={creatureData.actions}/>}

        {creatureData.legendaryActions.length > 0
            && <Actions title={'Легендарные действия'} actions={creatureData.legendaryActions}/>}

        {creatureData.lairActions.length > 0
            && <Actions title={'Действия логова'} actions={creatureData.lairActions}/>}

        {creatureData.regionalEffects.length > 0 &&
            <Actions title={'Эффекты местности'} actions={creatureData.regionalEffects}/>}

        {creatureData.description !== '' && <>
            <div className={styles.subtitle}>Описание</div>
            <hr/>
            <div>{creatureData.description}</div>
        </>}
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

const Actions: React.FC<{ actions: INameValue[], title: string }> = ({actions, title}) => {
    return <>
        <div className={styles.subtitle}>{title}</div>

        <hr/>
        {actions.map(action => <div><span
            className={styles.highlight}>{action.name}:</span> {action.value}</div>)}
    </>
}