import React, {useEffect} from 'react';
import styles from './CreateCreaturePage.module.scss'
import {useFieldArray, useForm} from 'react-hook-form';
import {ICreatureData} from '../../types/creatureTypes';
import {StatsInputBlock} from '../../components/pages/create-creature-page/StatsInputBlock';
import {NameInputBlock} from '../../components/pages/create-creature-page/NameInputBlock';
import {HeadInputBlock} from '../../components/pages/create-creature-page/HeadInputBlock';
import {SaveThrowsInputBlock} from '../../components/pages/create-creature-page/SaveThrowsInputBlock';
import {QuantitativeInputBlock} from '../../components/pages/create-creature-page/QuantitativeInputBlock';
import {SpeedInputBlock} from '../../components/pages/create-creature-page/SpeedInputBlock';
import {VisionInputBlock} from '../../components/pages/create-creature-page/VisionInputBlock';
import {SkillsInputBlock} from '../../components/pages/create-creature-page/SkillsInputBlock';
import {ParametersInputBlock} from '../../components/pages/create-creature-page/ParametersInputBlock';
import {ActionsInputBlock} from '../../components/pages/create-creature-page/ActionsInputBlock';
import {DescriptionInputBlock} from '../../components/pages/create-creature-page/DescriptionInputBlock';

export const CreateCreaturePage: React.FC = () => {

    const {handleSubmit, control, watch} = useForm<ICreatureData>({
        defaultValues: {
            imageUrl: 'https://www.pinclipart.com/picdir/big/36-361692_eps-svg-free-clipart-of-a-silhouetted-griffin.png',

            name: '',

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

            strengthSaveThrow: false,
            agilitySaveThrow: false,
            constitutionSaveThrow: false,
            intelligenceSaveThrow: false,
            wisdomSaveThrow: false,
            charismaSaveThrow: false,

            speed: '30',
            speedClimb: '0',
            speedFly: '0',
            speedSwim: '0',

            vision: '30',
            visionDark: '0',
            visionBlind: '0',
            visionTrue: '0',

            parameters: [{
                name: '',
                value: ''
            }],

            actions: [{
                name: '',
                value: ''
            }]
        }
    })

    const {fields: fieldsParameters, append: appendParameters, remove: removeParameters} = useFieldArray<ICreatureData>({control: control, name: 'parameters'})
    const {fields: fieldsActions, append: fieldsAppend, remove: fieldsRemove} = useFieldArray<ICreatureData>({control: control, name: 'actions'})

    const watchImageUrl = watch('imageUrl')

    const watchStats = watch(['strength', 'agility', 'constitution', 'intelligence', 'wisdom', 'charisma'])
    const namedStats = {
        'strength': watchStats[0], 'agility': watchStats[1], 'constitution': watchStats[2], 'intelligence': watchStats[3], 'wisdom': watchStats[4], 'charisma': watchStats[5],
    }
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
            <VisionInputBlock control={control}/>
            <SkillsInputBlock control={control} stats={namedStats} proficiencyBonus={watchProficiencyBonus}/>
            <ParametersInputBlock fields={fieldsParameters}
                                  append={appendParameters} remove={removeParameters} control={control} />
            <ActionsInputBlock fields={fieldsActions}
                               append={fieldsAppend} remove={fieldsRemove} control={control}/>
            <DescriptionInputBlock control={control}/>
        </div>
        <button className={styles.btnSubmit}>submit (test)</button>
    </form>
};