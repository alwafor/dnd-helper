import React from 'react';
import styles from './InputBlock.module.css'
import {NameSupplier} from '../../reusable/name-supplier/NameSupplier';
import {Control, Controller} from 'react-hook-form';
import {Input} from '../../reusable/inputs/Input';
import {ICreatureData} from '../../../types/creatureTypes';
import {min0max999999, Validate} from '../../../utils/validateForms';
import {difficultyToXp} from '../../../utils/convertations';

interface IProps {
    control: Control<ICreatureData, any>
}

export const QuantitativeInputBlock: React.FC<IProps> = ({control}) => {
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
                                       onChange={(e) => field.onChange(min0max999999(e.target.value))}
                                />}
                />
            </NameSupplier>

            <NameSupplier name={'Броня'}>
                <Controller name={'armor'}
                            control={control}
                            render={({field}) =>
                                <Input {...field}
                                       type={'number'}
                                       onChange={(e) => field.onChange(min0max999999(e.target.value))}
                                />}
                />
            </NameSupplier>

            <NameSupplier name={'Сложность'}>
                <Controller name={'difficulty'}
                            control={control}
                            render={({field}) =>
                                <Input {...field}
                                       type={'number'}
                                       onChange={(e) => field.onChange(Validate(e.target.value).integer().min(0).max(30).run())}
                                       asideValue={`(${difficultyToXp(+field.value)}xp)`}
                                />}
                />
            </NameSupplier>

            <NameSupplier name={'Бонус мастер.'}>
                <Controller name={'proficiencyBonus'}
                            control={control}
                            render={({field}) =>
                                <Input {...field}
                                       type={'number'}
                                       onChange={(e) => field.onChange(Validate(e.target.value).integer().min(0).max(10).run())}
                                />}
                />
            </NameSupplier>
        </div>
    </div>
};