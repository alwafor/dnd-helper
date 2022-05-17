import React from 'react';
import {Control, Controller} from 'react-hook-form';
import styles from './InputBlock.module.scss';
import {speedData, visionData} from '../../../contants/creatureContants';
import {NameSupplier} from '../../reusable/name-supplier/NameSupplier';
import {Input} from '../../reusable/inputs/Input';
import {ICreatureData} from '../../../types/creatureTypes';

interface IProps {
    control: Control<ICreatureData, any>
}

export const VisionInputBlock: React.FC<IProps> = ({control}) => {
    return <div className={styles.inputBlock}>
        <div className={styles.title}>
            Зрение
        </div>
        <div className={styles.inputBlockInputs + ' ' + styles.block4}>
            {visionData.visionNames.map(visionName =>
                <NameSupplier name={visionName.displayName}>
                    <Controller name={visionName.inputName}
                                control={control}
                                render={({field}) =>
                                    <Input {...field}
                                           type={'number'}
                                           asideValue={visionData.asideValue}
                                           onChange={(e) => field.onChange(speedData.validateFunction(e.target.value))}
                                    />}
                    />
                </NameSupplier>)
            }
        </div>
    </div>
};