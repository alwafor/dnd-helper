import React from 'react';
import styles from './InputBlock.module.scss'
import {NameSupplier} from '../../reusable/name-supplier/NameSupplier';
import {Control, Controller} from 'react-hook-form';
import {Input} from '../../reusable/inputs/Input';
import {ICreatureData} from '../../../types/creatureTypes';
import {Validate} from '../../../utils/validateForms';
import {difficultyToXp, percToPassivePerc} from '../../../utils/convertations';

interface IProps {
    control: Control<ICreatureData, any>
    wisdom: string
}

export const QuantitativeBlock: React.FC<IProps> = ({control, wisdom}) => {
    return <div className={styles.inputBlock}>
        <div className={styles.title}>
            Кол. характ.
        </div>
        <div className={styles.inputBlockInputs + ' ' + styles.block4}>
            <NameSupplier name={'ХП'}>
                <Controller name={'hp'}
                            control={control}
                            render={({field}) =>
                                <Input {...field}
                                       type={'number'}
                                       onChange={(e) => field.onChange(Validate(e.target.value).integer().max(999999).run())}
                                />}
                />
            </NameSupplier>

            <NameSupplier name={'Броня'}>
                <Controller name={'armor'}
                            control={control}
                            render={({field}) =>
                                <Input {...field}
                                       type={'number'}
                                       onChange={(e) => field.onChange(Validate(e.target.value).integer().max(999999).run())}
                                />}
                />
            </NameSupplier>

            <NameSupplier name={'Сложность'}>
                <Controller name={'difficulty'}
                            control={control}
                            render={({field}) =>
                                <Input {...field}
                                       type={'number'}
                                       onChange={(e) => field.onChange(Validate(e.target.value).integer().max(30).run())}
                                       asideValue={`(${difficultyToXp(+field.value)}xp)`}
                                />}
                />
            </NameSupplier>

            <NameSupplier name={'Пас. воспр.'}>
                <Input disabled value={percToPassivePerc(wisdom)}/>
            </NameSupplier>
        </div>
    </div>
};