import React, {useEffect} from 'react';
import {Select} from '../../components/reusable/selects/Select';
import styles from './CreateCreaturePage.module.scss'
import {Controller, useForm} from 'react-hook-form';
import {Input} from '../../components/reusable/inputs/Input';
import {NameSupplier} from '../../components/reusable/name-supplier/NameSupplier';
import {sizes, types, worldViews} from '../../contants/cretureContants';
import {ICreatureData} from '../../types/creatureTypes';

interface IProps {

}

export const CreateCreaturePage: React.FC<IProps> = () => {

    const {handleSubmit, control, watch} = useForm<ICreatureData>({
        defaultValues: {
            imageUrl: 'https://www.pinclipart.com/picdir/big/36-361692_eps-svg-free-clipart-of-a-silhouetted-griffin.png'
        }
    })
    const watchImageUrl = watch('imageUrl')

    useEffect(() => {
        console.log(watchImageUrl)
    }, [watchImageUrl])

    const onSubmit = (data: ICreatureData) => console.log(data)

    return <form className={styles.root} onSubmit={handleSubmit(onSubmit)}>

        <div className={styles.imageLoader}>
            <div className={styles.imageWrapper}>
                <img className={styles.image} src={watchImageUrl} alt="some image"/>
            </div>
            <NameSupplier name={'Изображение'}>
                <Controller name={'imageUrl'} control={control}
                            render={({field}) => <Input {...field} placeholder={'Ссылка...'}/>}/>
            </NameSupplier>
        </div>

        <div className={styles.inputBlocksWrapper}>
            <div className={styles.inputBlock + ' ' + styles.block4}>
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

            <div className={styles.inputBlock + ' ' + styles.block6}>
                <NameSupplier name={'Сил'}>
                    <Controller name={'strength'} control={control}
                                render={({field}) => <Input {...field} max={99} type={'number'} asideValue={'s'}/>}/>
                </NameSupplier>
                <NameSupplier name={'Лов'}>
                    <Controller name={'agility'} control={control}
                                render={({field}) => <Input {...field} max={99} type={'number'} asideValue={'s'}/>}/>
                </NameSupplier>
                <NameSupplier name={'Тел'}>
                    <Controller name={'constitution'} control={control}
                                render={({field}) => <Input {...field} max={99} type={'number'} asideValue={'s'}/>}/>
                </NameSupplier>
                <NameSupplier name={'Инт'}>
                    <Controller name={'intelligence'} control={control}
                                render={({field}) => <Input {...field} max={99} type={'number'} asideValue={'s'}/>}/>
                </NameSupplier>
                <NameSupplier name={'Мудр'}>
                    <Controller name={'wisdom'} control={control}
                                render={({field}) => <Input {...field} max={99} type={'number'} asideValue={'s'}/>}/>
                </NameSupplier>
                <NameSupplier name={'Хар'}>
                    <Controller name={'charisma'} control={control}
                                render={({field}) => <Input {...field} max={99} type={'number'} asideValue={'s'}/>}/>
                </NameSupplier>
            </div>
        </div>

        <button>submit (test)</button>
    </form>
};