import React, {useEffect} from 'react';
import styles from './CreateCreaturePage.module.scss'
import {useForm} from 'react-hook-form';
import {ICreatureData} from '../../types/creatureTypes';
import {StatsInputBlock} from '../../components/pages/create-creature-page/StatsInputBlock';
import {NameInputBlock} from '../../components/pages/create-creature-page/NameInputBlock';
import {HeadInputBlock} from '../../components/pages/create-creature-page/HeadInputBlock';
import {SaveThrowsInputBlock} from '../../components/pages/create-creature-page/SaveThrowsInputBlock';
import {QuantitativeInputBlock} from '../../components/pages/create-creature-page/QuantitativeInputBlock';
import {SpeedInputBlock} from '../../components/pages/create-creature-page/SpeedInputBlock';


export const CreateCreaturePage: React.FC = () => {

    const {handleSubmit, control, watch} = useForm<ICreatureData>({
        defaultValues: {
            imageUrl: 'https://www.pinclipart.com/picdir/big/36-361692_eps-svg-free-clipart-of-a-silhouetted-griffin.png',
            strength: '10',
            agility: '10',
            constitution: '10',
            intelligence: '10',
            wisdom: '10',
            charisma: '10',
            proficiencyBonus: '0',
            armor: '10',
            hp: '10',
            difficulty: '0',
            speed: '30',
            speedClimb: '0',
            speedFly: '0',
            speedSwim: '0',
        }
    })
    const watchImageUrl = watch('imageUrl')

    const watchStats = watch(['strength', 'agility', 'constitution', 'intelligence', 'wisdom', 'charisma'])
    const watchProficiencyBonus = watch('proficiencyBonus')

    useEffect(() => {
        console.log(watchImageUrl)
    }, [watchImageUrl])

    const onSubmit = (data: ICreatureData) => console.log(data)

    return <form className={styles.root} onSubmit={handleSubmit(onSubmit)}>
        <HeadInputBlock watchImageUrl={watchImageUrl} control={control}/>
        <div className={styles.inputBlocksWrapper}>
            <NameInputBlock control={control}/>
            <StatsInputBlock control={control}/>
            <SaveThrowsInputBlock control={control} stats={watchStats} proficiencyBonus={watchProficiencyBonus}/>
            <QuantitativeInputBlock control={control}/>
            <SpeedInputBlock control={control}/>
        </div>
        <button>submit (test)</button>
    </form>
};