import React from 'react';
import styles from './InputBlock.module.scss';
import {Control, Controller} from 'react-hook-form';
import {ICreatureData} from '../../../types/creatureTypes';
import {Textarea} from '../../reusable/textareas/Textarea';

interface IProps {
    control: Control<ICreatureData, any>
}

export const DescriptionInputBlock: React.FC<IProps> = ({control}) => {
    return <div className={styles.inputBlock + ' ' + styles.full}>
        <div className={styles.title}>
            Описание
        </div>
        <div className={styles.fullSection + ' mt-10'}>
            <Controller control={control} name={'description'} render={({field}) => <Textarea {...field} placeholder={'Это поле необязательно...'}/>}/>
        </div>
    </div>
};