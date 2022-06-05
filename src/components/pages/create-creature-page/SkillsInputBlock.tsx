import React from 'react';
import styles from './InputBlock.module.css'
import {Control, Controller} from 'react-hook-form';
import {ICreatureData} from '../../../types/creatureTypes';
import {skillsData} from '../../../contants/creatureContants';
import {Checkbox} from '../../reusable/checkboxes/Checkbox';
import {statToModifier} from '../../../utils/creatureCalculation';
import {addPlusToPositive} from '../../../utils/stringUtils';

interface IProps {
    control: Control<ICreatureData, any>,
    stats: {strength: string, agility: string, constitution: string, intelligence: string, wisdom: string, charisma: string},
    proficiencyBonus: string
}

export const SkillsInputBlock: React.FC<IProps> = ({control, stats, proficiencyBonus}) => {
    return <div className={styles.inputBlock + ' ' + styles.full}>
        <div className={styles.title}>
            Способности
        </div>
        <div className={styles.inputBlockInputs + ' ' + styles.rowflow + ' mt-2'}>
            {skillsData.map(skillData =>
                <Controller name={skillData.inputName}
                            control={control}
                            key={skillData.inputName}
                            render={({field}) =>
                                <Checkbox {...field}
                                          text={skillData.displayName}
                                          checked={field.value}
                                          asideValue={addPlusToPositive(statToModifier(stats[skillData.stat]) + (field.value ? +proficiencyBonus : 0))}
                                /> }
                />)}
        </div>
    </div>
};