import React from 'react';
import styles from './InputBlock.module.scss';
import {NameSupplier} from '../../reusable/name-supplier/NameSupplier';
import {Control, Controller} from 'react-hook-form';
import {Input} from '../../reusable/inputs/Input';
import {Select} from '../../reusable/selects/Select';
import {sizes, types, worldViews} from '../../../contants/creatureContants';
import {ICreatureData} from '../../../types/creatureTypes';

interface IProps {
    control: Control<ICreatureData, any>
}

export const NameInputBlock: React.FC<IProps> = ({control}) => {
    return  <div className={styles.inputBlock}>
        <div className={styles.title}>
            Базовая информация
        </div>
        <div className={styles.inputBlockInputs + ' ' + styles.block4}>
            <NameSupplier name={'Имя'}>
                <Controller name={'name'} control={control} render={({field}) => <Input {...field}/>}/>
            </NameSupplier>

            <NameSupplier name={'Тип'}>
                <Controller name={'type'} control={control}
                            render={({field}) => <Select {...field} defaultValue={'undefined'}>
                                <option disabled value={'undefined'}>Выбор...</option>
                                {types.map(type => <option key={type} value={type}>{type}</option>)}
                            </Select>}/>
            </NameSupplier>

            <NameSupplier name={'Размер'}>
                <Controller name={'size'} control={control}
                            render={({field}) => <Select {...field} defaultValue={'undefined'}>
                                <option disabled value={'undefined'}>Выбор...</option>
                                {sizes.map(size => <option key={size} value={size}>{size}</option>)}
                            </Select>}/>
            </NameSupplier>

            <NameSupplier name={'Мировоззрение'}>
                <Controller name={'worldview'} control={control}
                            render={({field}) => <Select {...field} defaultValue={'undefined'}>
                                <option disabled value={'undefined'}>Выбор...</option>
                                {worldViews.map(worldView => <option key={worldView}
                                                                     value={worldView}>{worldView}</option>)}
                            </Select>}/>
            </NameSupplier>
        </div>


    </div>
};