import React from 'react';
import styles from './InputBlock.module.scss';
import {Control, Controller, FieldArrayWithId, UseFieldArrayAppend, UseFieldArrayRemove} from 'react-hook-form';
import {ICreatureData} from '../../../types/creatureTypes';
import {Input} from '../../reusable/inputs/Input';
import {NameSupplier} from '../../reusable/name-supplier/NameSupplier';
import {Button} from '../../reusable/buttons/Button';

interface IProps {
    fields: FieldArrayWithId<ICreatureData, "parameters", "id">[],
    append:  UseFieldArrayAppend<ICreatureData, "parameters">,
    control: Control<ICreatureData>,
    remove: UseFieldArrayRemove
}

export const ParametersInputBlock: React.FC<IProps> = ({fields, append, control, remove}) => {

    const handleAppend = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        append({name: '', value: ''})
    }

    const handleRemove = (index: number) => (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        remove(index)
    }

    return <div className={styles.inputBlock + ' ' + styles.full}>
        <div className={styles.title}>
            Другие параметры
        </div>
        <div className={styles.fullSection + ' mt-8'}>
            {fields.map((field: any, index) => <div className={styles.fullSectionItem} key={field.id}>
                    <NameSupplier name={'Название параметра'}><Controller control={control} name={`parameters.${index}.name` as const} render={({field}) => <Input {...field}/>}/></NameSupplier>
                    <NameSupplier name={'Значение'}><Controller control={control} name={`parameters.${index}.value` as const} render={({field}) => <Input {...field}/>}/></NameSupplier>
                    <Button className={styles.btnRemove} onClick={handleRemove(index)}>-</Button>
                </div>
            )}
        </div>
        <Button className={styles.btnAdd} onClick={handleAppend}>+</Button>
    </div>
};