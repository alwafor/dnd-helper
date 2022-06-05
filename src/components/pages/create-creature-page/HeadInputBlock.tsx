import React from 'react';
import styles from './HeadInputBlock.module.css'
import {NameSupplier} from '../../reusable/name-supplier/NameSupplier';
import {Control, Controller} from 'react-hook-form';
import {Input} from '../../reusable/inputs/Input';
import {ICreatureData} from '../../../types/creatureTypes';

interface IProps {
    watchImageUrl: string
    control: Control<ICreatureData, any>
}

export const HeadInputBlock: React.FC<IProps> = ({control, watchImageUrl}) => {
    return <div className="flex flex-col items-center">
        <div className="relative w-[250px] h-[250px] mb-2.5">
            <img className="absolute object-cover top-0 left-0 w-full h-full rounded-full border-black" src={watchImageUrl} alt="some image"/>
        </div>
        <div className={styles.row + ' flex items-center mt-4 w-full'}>
            <NameSupplier name={'Имя'}>
                <Controller name={'name'} control={control} rules={{required: true}}
                            render={({field}) => <Input {...field}/>}/>
            </NameSupplier>
            <NameSupplier name={'Изображение'}>
                <Controller name={'imageUrl'} control={control}
                            render={({field}) => <Input {...field} placeholder={'Ссылка...'}/>}/>
            </NameSupplier>
        </div>

    </div>
};