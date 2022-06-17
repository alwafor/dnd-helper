import React, {useState} from 'react'
import styles from './SavePage.module.css'
import imgSave from '../../assets/images/icons/diskette-icon.png'

import {useAppDispatch, useAppSelector} from '../../hooks/redux'
import {loadCreatures} from '../../redux/reducers/creaturesReducer'

import {PageHead} from '../../components/layout/page-head/PageHead'
import {Button} from '../../components/reusable/buttons/Button'
import {Modal} from '../../components/reusable/modal/Modal'
import {Textarea} from '../../components/reusable/textareas/Textarea'

export const SavePage: React.FC = () => {

    const data = useAppSelector(state => state)
    const dispatch = useAppDispatch()

    const [saveStatus, setSaveStatus] = useState('')
    const [isLoadModalOpen, setIsLoadModalOpen] = useState(false)
    const [textareaValue, setTextareaValue] = useState('')
    const [loadMessage, setLoadMessage] = useState('')

    const handleSaveButtonClick = () => {
        navigator.clipboard.writeText(JSON.stringify(data))
            .then(() => setSaveStatus('Данные скопированы в буфер обмена!'))
            .catch(err => {
                console.error(err)
                setSaveStatus('Произошла непредвиденная ошибка!')
            })
    }

    const handleOpenLoadMenuButtonClick = () => {
        setIsLoadModalOpen(true)
    }

    const handleLoadButtonClick = () => {
        try {
            const data = JSON.parse(textareaValue)
            dispatch(loadCreatures(data.creatures.creatures))

            setLoadMessage('Данные успешно разобраны и загружены!')
        } catch (e) {
            setLoadMessage('Произошла ошибка! Возможно, данные некорректны или повреждены.')
        }
    }

    return <div className={styles.savePage}>
        <PageHead img={imgSave} title={'Сохранение'} style={{width: 100, height: 100}}/>
        <p className={styles.paragraph}>
            Страница сохраний позволяет сохранить или загрузить ваши данные. Поскольку данное веб-приложение не
            использует сервер, все данные хранятся в локальном хранилище в браузере вашего устройства и если вы хотите
            перенести данные или пересохранить их для себя, вы можете это сделать.
        </p>
        <p className={styles.paragraph}>
            Нажатие кнопки "Сохранить" скопирует в буфер обмена всю сохранённую информацию (вы можете вставить её куда
            угодно используя Ctrl/Cmd + V, или другой вариант вставки в зависимости от вашего устройства).
        </p>
        <p className={styles.paragraph}>
            Нажатие кнопки "Загрузить" вызовет модальное окно с полем для загрузки данных. Вставьте в него ранее
            сохранённые данные.
        </p>
        <p className={styles.paragraph}>
            <b>Внимание!</b> Сохранение и загрузка являются <b>экспериментальной функциональностью!</b> Поэтому
            программа на данном этапе не может распознать наличие корректных и некорректных полей JSON строки. Если
            данные будут некорректны, работа программы на вашем устройстве может быть нарушена. Следите, чтобы
            сохранённые данные не изменялись перед последующей загрузкой, если хотите корректно использовать данный
            функционал.
        </p>

        {saveStatus !== '' && <div className={styles.saveStatus}>{saveStatus}</div>}

        <div className={styles.buttonsWrapper}>
            <Button className={styles.button} onClick={handleSaveButtonClick}>Сохранить</Button>
            <Button className={styles.button} onClick={handleOpenLoadMenuButtonClick}>Загрузить</Button>
        </div>

        <Modal isOpen={isLoadModalOpen} close={() => setIsLoadModalOpen(false)}>
            <div className={styles.modal}>
                Введите сохранённые данные в поле ниже
                <Textarea value={textareaValue}
                          onChange={e => setTextareaValue(e.target.value)}
                          className={'max-h-[500px]'}
                />
                {loadMessage !== '' && <div>{loadMessage}</div>}
                <Button onClick={handleLoadButtonClick}>Загрузить</Button>
            </div>
        </Modal>
    </div>
}