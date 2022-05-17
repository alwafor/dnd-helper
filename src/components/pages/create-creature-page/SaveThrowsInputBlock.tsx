import React from 'react';
import styles from './InputBlock.module.scss'
import {Control, Controller} from 'react-hook-form';
import {ICreatureData} from '../../../types/creatureTypes';
import {Checkbox} from '../../reusable/checkboxes/Checkbox';
import {saveThrowsStatsData} from '../../../contants/creatureContants';
import {statToModifier} from '../../../utils/creatureCalculation';

interface IProps {
    control: Control<ICreatureData, any>
    stats: string[]
    proficiencyBonus: string
}

const getStrSaveThrowBonus = (stat: string, hasSaveThrow: boolean, proficiencyBonus: string): string => {
    let throwBonus = statToModifier(stat) + (hasSaveThrow ? +proficiencyBonus : 0)
    return throwBonus > 0 ? '+' + throwBonus : String(throwBonus)
}

export const SaveThrowsInputBlock: React.FC<IProps> = ({control, stats, proficiencyBonus}) => {

    return <div className={styles.inputBlock}>
        <div className={styles.title}>Владение спас. бросками</div>
        <div className={styles.inputBlockInputs + ' ' + styles.block6 + ' ' + styles.withoutNames}>
            {saveThrowsStatsData.map((saveThrow, i) =>
                <Controller name={saveThrow.inputName} key={saveThrow.inputName}
                            control={control}
                            render={({field}) =>
                                <Checkbox {...field} text={saveThrow.displayName}
                                          checked={field.value}
                                          asideValue={getStrSaveThrowBonus(stats[i], field.value, proficiencyBonus)}
                                />
                            }
                />
            )}
        </div>
    </div>
};