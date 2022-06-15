import React, {MouseEventHandler} from 'react'
import styles from './BestiaryPageSearchForm.module.css'

import imgSearch from '../../../../assets/images/icons/search-icon.svg'

import {sizes, types, worldViews} from '../../../../contants/creatureContants'

import {Controller} from 'react-hook-form'
import {Input} from '../../../reusable/inputs/Input'
import {MultipleInput} from '../../../reusable/inputs/MultipleInput'
import {Button} from '../../../reusable/buttons/Button'

interface IProps {
    control: any,
    setValue: Function,
    onResetButtonClick: MouseEventHandler<HTMLButtonElement>
}

export const BestiaryPageSearchForm: React.FC<IProps> = ({control, setValue, onResetButtonClick}) => {

    const arrayFrom0To30 = Array(31).fill(null).map((e,i) => String(i))

    return <form className={styles.sortWrapper}>
        <Controller control={control}
                    name={'search'}
                    render={({field}) => <div className={styles.sortInputWrapper}>
                        <img src={imgSearch} className={styles.sortInputImg} alt={'search'}/>
                        <Input {...field} className={styles.sortInput} type="text"/>
                    </div>}
        />

        <div className={styles.filterItems}>
            <Controller control={control}
                        name={'size'}
                        render={({field}) =>
                            <MultipleInput
                                {...field}
                                setValue={(value: string) => setValue('size', value)}
                                dropdownValues={sizes}
                                placeholder={'Размер'}
                            />}
            />

            <Controller control={control}
                        name={'type'}
                        render={({field}) =>
                            <MultipleInput
                                {...field}
                                setValue={(value: string) => setValue('type', value)}
                                dropdownValues={types}
                                placeholder={'Тип'}
                            />}
            />

            <Controller control={control}
                        name={'worldview'}
                        render={({field}) =>
                            <MultipleInput
                                {...field}
                                setValue={(value: string) => setValue('worldview', value)}
                                dropdownValues={worldViews}
                                placeholder={'Мировоз.'}
                            />}
            />

            <Controller control={control}
                        name={'danger'}
                        render={({field}) =>
                            <MultipleInput
                                {...field}
                                setValue={(value: string) => setValue('danger', value)}
                                dropdownValues={arrayFrom0To30}
                                placeholder={'Опасность'}
                            />}
            />

            <Controller control={control}
                        name={'habitat'}
                        render={({field}) =>
                            <Input
                                {...field}
                                placeholder={'Местность'}
                            />}
            />

            <Button onClick={onResetButtonClick}>Сброс</Button>

        </div>
    </form>
}