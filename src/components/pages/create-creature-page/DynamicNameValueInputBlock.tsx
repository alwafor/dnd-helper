import React from 'react';
import styles from './InputBlock.module.css';
import {NameSupplier} from '../../reusable/name-supplier/NameSupplier';
import {Control, Controller, FieldArrayWithId, UseFieldArrayAppend, UseFieldArrayRemove} from 'react-hook-form';
import {Input} from '../../reusable/inputs/Input';
import {Button} from '../../reusable/buttons/Button';
import {ICreatureData, TCreatureDataDynamicFields} from '../../../types/creatureTypes';

interface IProps {
    fields: FieldArrayWithId<ICreatureData, TCreatureDataDynamicFields, 'id'>[],
    append: UseFieldArrayAppend<ICreatureData, TCreatureDataDynamicFields>,
    control: Control<ICreatureData>,
    remove: UseFieldArrayRemove,

    ValueComponent: React.FC<any>,
    dynamicFormName: TCreatureDataDynamicFields,
    title: string,
    nameFieldName: string
    valueFieldName: string

    isRemoveButtonOnTop?: boolean
}

export const DynamicNameValueInputBlock: React.FC<IProps> = ({
                                                                 control,
                                                                 remove,
                                                                 fields,
                                                                 append,
                                                                 dynamicFormName,
                                                                 ValueComponent,
                                                                 title,
                                                                 nameFieldName,
                                                                 valueFieldName,
                                                                 isRemoveButtonOnTop = false
                                                             }) => {
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
            {title}
        </div>
        <div className={styles.fullSection + ' mt-10'}>
            {fields.map((field: any, index) => <div className={styles.fullSectionItem} key={field.id}>
                    <NameSupplier name={nameFieldName}>
                        <Controller control={control}
                                    name={`${dynamicFormName}.${index}.name` as const}
                                    rules={{required: true}}
                                    render={({field}) =>
                                        <Input {...field}/>}
                        />
                    </NameSupplier>

                    <NameSupplier name={valueFieldName}>
                        <Controller control={control}
                                    name={`${dynamicFormName}.${index}.value` as const}
                                    rules={{required: true}}
                                    render={({field}) =>
                                        <ValueComponent {...field}/>}
                        />
                    </NameSupplier>

                    <Button className={styles.btnRemove + (isRemoveButtonOnTop ? ' ' + styles._top : '')} onClick={handleRemove(index)}>-</Button>
                </div>
            )}
        </div>
        <Button className={styles.btnAdd} onClick={handleAppend}>+</Button>
    </div>
};

