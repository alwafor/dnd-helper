import React from 'react';
import styles from './InputBlock.module.scss';
import {NameSupplier} from '../../reusable/name-supplier/NameSupplier';
import {Control, Controller, FieldArrayWithId, UseFieldArrayAppend, UseFieldArrayRemove} from 'react-hook-form';
import {Input} from '../../reusable/inputs/Input';
import {Button} from '../../reusable/buttons/Button';
import {ICreatureData} from '../../../types/creatureTypes';
import {Textarea} from '../../reusable/textareas/Textarea';

interface IProps {
    fields: FieldArrayWithId<ICreatureData, 'parameters', 'id'>[],
    append: UseFieldArrayAppend<ICreatureData, 'parameters'>,
    control: Control<ICreatureData>,
    remove: UseFieldArrayRemove
}

export const ActionsInputBlock: React.FC<IProps> = ({fields, append, control, remove}) => {

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
            Действия
        </div>
        <div className={styles.fullSection + ' mt-10'}>
            {fields.map((field: any, index) => <div className={styles.fullSectionItem} key={field.id}>
                    <NameSupplier name={'Название действия'}>
                        <Controller control={control}
                                    name={`actions.${index}.name` as const}
                                    rules={{required: true}}
                                    render={({field}) =>
                                        <Input {...field}/>}
                        />
                    </NameSupplier>

                    <NameSupplier name={'Значение'}>
                        <Controller control={control}
                                    name={`actions.${index}.value` as const}
                                    rules={{required: true}}
                                    render={({field}) =>
                                        <Textarea {...field}/>}
                        />
                    </NameSupplier>

                    <Button className={styles.btnRemove + ' ' + styles._top} onClick={handleRemove(index)}>-</Button>
                </div>
            )}
        </div>
        <Button className={styles.btnAdd} onClick={handleAppend}>+</Button>
    </div>
};