import React, {ChangeEvent} from 'react';
import styles from './InputBlock.module.scss'
import {NameSupplier} from '../../reusable/name-supplier/NameSupplier';
import {Control, Controller} from 'react-hook-form';
import {Input} from '../../reusable/inputs/Input';
import {statToModifier} from '../../../utils/creatureCalculation';
import {statsData} from '../../../contants/creatureContants';
import {ICreatureData} from '../../../types/creatureTypes';

interface IProps {
    control: Control<ICreatureData, any>
}

const validateStatFieldFunc = (e: ChangeEvent<HTMLInputElement>) => {
    const value = +e.target.value

    if (Number.isNaN(value)) e.target.value = '0';
    else if (value > 30) e.target.value = '30';
    else if (value < 0) e.target.value = '0';
}

export const StatsInputBlock: React.FC<IProps> = ({control}) => {
    return  <div className={styles.inputBlock + ' ' + styles.block6}>
        {statsData.map(statData => <NameSupplier name={statData.displayName}>
                <Controller name={statData.inputName}
                            control={control}
                            render={({field}) =>
                                <Input {...field} min={1} max={30} type={'number'}
                                       onChange={(e) => {
                                           validateStatFieldFunc(e)
                                           field.onChange(e)
                                       }}
                                       asideValue={statToModifier(field.value)}
                                />}
                />
            </NameSupplier>
        )}
    </div>
};