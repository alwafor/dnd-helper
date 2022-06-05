import React from 'react';
import styles from './InputBlock.module.css'
import {NameSupplier} from '../../reusable/name-supplier/NameSupplier';
import {Control, Controller} from 'react-hook-form';
import {Input} from '../../reusable/inputs/Input';
import {statToModifier} from '../../../utils/creatureCalculation';
import {statsData} from '../../../contants/creatureContants';
import {ICreatureData} from '../../../types/creatureTypes';
import {Validate} from '../../../utils/validateForms';
import {addPlusToPositive} from '../../../utils/stringUtils';

interface IProps {
    control: Control<ICreatureData, any>
}

export const StatsInputBlock: React.FC<IProps> = ({control}) => {
    return <div className={styles.inputBlock}>
        <div className={styles.title}>Статы</div>
        <div className={styles.inputBlockInputs + ' ' + styles.block6}>
            {statsData.map(statData =>
                <NameSupplier name={statData.displayName} key={statData.inputName}>
                    <Controller name={statData.inputName}
                                control={control}
                                render={({field}) =>
                                    <Input {...field} type={'number'}
                                           onChange={(e) => {
                                               field.onChange(Validate(e.target.value).integer().min(0).max(30).run())
                                           }}
                                           asideValue={`(${addPlusToPositive(statToModifier(field.value))})`}
                                    />}
                    />
                </NameSupplier>
            )}
        </div>
    </div>
};