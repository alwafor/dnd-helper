import React, {useMemo} from 'react'
import styles from './BestiaryPage.module.css'
import imgWolf from './../../assets/images/big/wolf.png'
import imgSearch from '../../assets/images/icons/search-icon.svg'

import {CreatureCard} from '../../components/pages/bestiary-page/creature-card/CreatureCard';
import {useAppSelector} from '../../hooks/redux';
import {useNavigate} from 'react-router-dom';
import {PageHead} from '../../components/layout/page-head/PageHead'
import {useForm, Controller} from 'react-hook-form'
import {Input} from '../../components/reusable/inputs/Input'

export const BestiaryPage: React.FC = () => {

    const allCreatures = useAppSelector(state => state.creatures.creatures)
    const navigate = useNavigate()

    const {control, watch} = useForm({
        defaultValues: {
            search: '',
            size: '',
            type: '',
            worldview: '',
            danger: '',
            languages: '',
            habitat: '',
        },
        mode: 'onChange'
    })

    const handleCreatureCardClick = (creatureName: string) => {
        navigate(`/creature/${creatureName}`)
    }

    const watchSearch = watch('search')
    const filteredCreatures = useMemo(() => {
        if(!watchSearch) return allCreatures

        return allCreatures.filter(creature => creature.name.toLowerCase().includes(watchSearch.toLowerCase()))
    }, [watchSearch])

    return <div className={styles.bestiaryPage}>
        <PageHead img={imgWolf} title={'Бестиарий'}/>
        <form className={styles.sortWrapper}>
            <Controller control={control} name={'search'} render={({field}) => <div className={styles.sortInputWrapper}>
                <img src={imgSearch} className={styles.sortInputImg} alt={'search'}/>
                <Input {...field} className={styles.sortInput} type="text"/>
            </div>}/>

        </form>
        <div className={styles.creaturesWrapper}>
            {filteredCreatures.map(creature => <CreatureCard onClick={handleCreatureCardClick} key={creature.name}
                                                        creatureData={creature}/>)}
        </div>
    </div>
};