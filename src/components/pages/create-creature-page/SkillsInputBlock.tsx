import React from 'react';
import styles from './InputBlock.module.scss'
import {Control, Controller} from 'react-hook-form';
import {ICreatureData} from '../../../types/creatureTypes';
import {skillsData} from '../../../contants/creatureContants';
import {Checkbox} from '../../reusable/checkboxes/Checkbox';

interface IProps {
    control: Control<ICreatureData, any>
}

export const SkillsInputBlock: React.FC<IProps> = ({control}) => {
    return <div className={styles.inputBlock + ' ' + styles.full}>
        <div className={styles.title}>
            Способности
        </div>
        <div className={styles.inputBlockInputs + ' ' + styles.rowflow + ' mt-2'}>
            {skillsData.map(skillData =>
                <Controller name={skillData.inputName}
                            control={control}
                            render={({field}) => <Checkbox {...field} text={skillData.displayName} checked={field.value}/> }
                />)}
        </div>
    </div>
};