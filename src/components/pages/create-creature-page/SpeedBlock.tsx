import React from 'react';
import styles from './InputBlock.module.scss'
import {NameSupplier} from '../../reusable/name-supplier/NameSupplier';
import {Control, Controller} from 'react-hook-form';
import {Input} from '../../reusable/inputs/Input';
import {speedData} from '../../../contants/creatureContants';
import {ICreatureData} from '../../../types/creatureTypes';

interface IProps {
    control: Control<ICreatureData, any>
}

export const SpeedBlock: React.FC<IProps> = ({control}) => {
    return <div className={styles.inputBlock}>
        <div className={styles.title}>
            Скорости
        </div>
        <div className={styles.inputBlockInputs + ' ' + styles.block4}>
            {speedData.speedNames.map(speedName =>
                <NameSupplier name={speedName.displayName}>
                    <Controller name={speedName.inputName}
                                control={control}
                                render={({field}) =>
                                    <Input {...field}
                                           type={'number'}
                                           asideValue={speedData.asideValue}
                                           onChange={(e) => field.onChange(speedData.validateFunction(e.target.value))}
                                    />}
                    />
                </NameSupplier>)
            }
        </div>
    </div>
};