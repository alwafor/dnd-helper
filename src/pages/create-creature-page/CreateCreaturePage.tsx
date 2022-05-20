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
import {DescriptionInputBlock} from '../../components/pages/create-creature-page/DescriptionInputBlock';
import {DynamicNameValueInputBlock} from '../../components/pages/create-creature-page/DynamicNameValueInputBlock';
import {Textarea} from '../../components/reusable/textareas/Textarea';
import {Input} from '../../components/reusable/inputs/Input';
import {Button} from '../../components/reusable/buttons/Button';
import {createCreatureDefaultValues} from '../../contants/hookFormConstants';

export const CreateCreaturePage: React.FC = () => {

    const {handleSubmit, control, watch, formState: {errors}} = useForm<ICreatureData>({
        defaultValues: createCreatureDefaultValues
    })

    const {
        fields: fieldsParameters,
        append: appendParameter,
        remove: removeParameter
    } = useFieldArray<ICreatureData>({control: control, name: 'parameters'})
    const {
        fields: fieldsActions,
        append: appendAction,
        remove: removeAction
    } = useFieldArray<ICreatureData>({control: control, name: 'actions'})

    const watchImageUrl = watch('imageUrl')

    const watchStats = watch(['strength', 'agility', 'constitution', 'intelligence', 'wisdom', 'charisma'])
    const namedStats = {
        'strength': watchStats[0],
        'agility': watchStats[1],
        'constitution': watchStats[2],
        'intelligence': watchStats[3],
        'wisdom': watchStats[4],
        'charisma': watchStats[5]
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

            <DynamicNameValueInputBlock fields={fieldsParameters} append={appendParameter} control={control}
                                        remove={removeParameter} ValueComponent={Input} dynamicFormName={'parameters'}
                                        title={'Другие параметры'} nameFieldName={'Название'}
                                        valueFieldName={'Значение'}
            />

            <DynamicNameValueInputBlock fields={fieldsActions} append={appendAction} control={control}
                                        remove={removeAction} ValueComponent={Textarea} dynamicFormName={'actions'}
                                        title={'Действия'} nameFieldName={'Название действия'}
                                        valueFieldName={'Значение'} isRemoveButtonOnTop={true}
            />

            <DescriptionInputBlock control={control}/>
        </div>
        <button className={styles.btnSubmit}>submit (test)</button>
    </form>
};