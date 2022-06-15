import React, {useMemo} from 'react'
import styles from './BestiaryPage.module.css'
import imgWolf from './../../assets/images/big/wolf.png'

import {useAppSelector} from '../../hooks/redux'
import {useNavigate} from 'react-router-dom'

import {CreatureCard} from '../../components/pages/bestiary-page/creature-card/CreatureCard'
import {PageHead} from '../../components/layout/page-head/PageHead'
import {useForm} from 'react-hook-form'
import {
    BestiaryPageSearchForm
} from '../../components/pages/bestiary-page/BestiaryPageSearchSection/BestiaryPageSearchForm'

export const BestiaryPage: React.FC = () => {

    const allCreatures = useAppSelector(state => state.creatures.creatures)
    const navigate = useNavigate()

    const {control, watch, setValue, reset} = useForm({
        defaultValues: {
            search: '',
            size: '',
            type: '',
            worldview: '',
            danger: '',
            languages: '',
            habitat: ''
        },
        mode: 'onChange'
    })

    const watchSearch = watch('search')

    const [
        watchSize,
        watchType,
        watchWorldview,
        watchDanger,
        watchLanguages,
        watchHabitat
    ] = watch(['size', 'type', 'worldview', 'danger', 'languages', 'habitat'])

    const handleCreatureCardClick = (creatureName: string) => {
        navigate(`/creature/${creatureName}`)
    }

    const handleResetFormButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        reset()
    }

    const includesField = (inputValue: string, matchValue: string) => {

        if(!inputValue) return true
        if(!matchValue) return false

        return inputValue.toLowerCase()
            .split(/\s*,/)
            .map(value => value.trim())
            .filter(value => value.length !== 0)
            .some(value => matchValue.toLowerCase().includes(value))
    }

    const searchedCreatures = useMemo(() => {
        if (!watchSearch) return allCreatures

        return allCreatures.filter(creature => creature.name.toLowerCase().includes(watchSearch.toLowerCase()))
    }, [watchSearch])

    const filteredCreatures = useMemo(() => {
        return searchedCreatures
            .filter(creature => {
                 return includesField(watchSize, creature.size) &&
                 includesField(watchType, creature.type) &&
                 includesField(watchWorldview, creature.worldview) &&
                 includesField(watchDanger, creature.difficulty) &&
                //  includesField(watchLanguages, creature.la) &&
                 includesField(watchHabitat, creature.habitat)
            })
    }, [searchedCreatures,
        watchSize,
        watchType,
        watchWorldview,
        watchDanger,
        watchLanguages,
        watchHabitat]
    )

    return <div className={styles.bestiaryPage}>
        <PageHead img={imgWolf} title={'Бестиарий'}/>
        <BestiaryPageSearchForm control={control} setValue={setValue} onResetButtonClick={handleResetFormButtonClick}/>
        <div className={styles.creaturesWrapper}>
            {filteredCreatures.map(creature => <CreatureCard onClick={handleCreatureCardClick} key={creature.name}
                                                             creatureData={creature}/>)}
        </div>
    </div>
}