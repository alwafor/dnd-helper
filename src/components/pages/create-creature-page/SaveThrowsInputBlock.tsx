import React from 'react';
import styles from './InputBlock.module.scss'
import {Control, Controller} from 'react-hook-form';
import {ICreatureData} from '../../../types/creatureTypes';
import {Checkbox} from '../../reusable/checkboxes/Checkbox';
import {saveThrowsStatsData} from '../../../contants/creatureContants';

interface IProps {
    control: Control<ICreatureData, any>
}

export const SaveThrowsInputBlock: React.FC<IProps> = ({control}) => {
    return <div className={styles.inputBlock}>
        <div className={styles.title}>Владение спас. бросками</div>
        <div className={styles.inputBlockInputs + ' ' + styles.block6 + ' ' + styles.withoutNames}>
            {saveThrowsStatsData.map(saveThrow =>
                <Controller name={saveThrow.inputName} control={control}
                            render={({field}) =>
                                <Checkbox {...field} text={saveThrow.displayName}
                                          checked={field.value}/>
                            }
                />
            )}
        </div>
    </div>
};