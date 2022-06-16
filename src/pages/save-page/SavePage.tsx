import React, {useState} from 'react'
import styles from './SavePage.module.css'
import imgSave from '../../assets/images/icons/diskette-icon.png'
import {PageHead} from '../../components/layout/page-head/PageHead'
import {Button} from '../../components/reusable/buttons/Button'
import {useAppSelector} from '../../hooks/redux'

export const SavePage: React.FC = () => {

    const data = useAppSelector(state => state)

    const [saveStatus, setSaveStatus] = useState('')

    const handleSaveButtonClick = () => {
        navigator.clipboard.writeText(JSON.stringify(data))
            .then(() => setSaveStatus('Данные скопированы в буфер обмена!'))
            .catch(err => {
                console.error(err)
                setSaveStatus('Произошла непредвиденная ошибка!')
            })
    }

    const handleLoadButtonClick = () => {
        setSaveStatus('load')
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

        {saveStatus !== '' && <div className={styles.saveStatus}>{saveStatus}</div>}

        <div className={styles.buttonsWrapper}>
            <Button className={styles.button} onClick={handleSaveButtonClick}>Сохранить</Button>
            <Button className={styles.button} onClick={handleLoadButtonClick}>Загрузить</Button>
        </div>

    </div>

}