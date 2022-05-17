import {max999999} from '../utils/validateForms';

export const types = ['Растение', 'Абберация', 'Гуманоид', 'Великан', 'Фея', 'Слизь', 'Конструкт', 'Нежить', 'Дракон', 'Небожитель', 'Демон', 'Элементаль', 'Чудовище'] as const
export const worldViews = ['Хаотично-добрый', 'Хаотично-нейтральный', 'Хаотично-злой', 'Нейтрально-добрый', 'Нейтральный', 'Нейтрально-злой', 'Законно-добрый', 'Законно-нейтральный', 'Законно-злой'] as const
export const sizes = ['Мелкий', 'Маленький', 'Средний', 'Большой', 'Огромный', 'Гигантский'] as const

export type TSize = typeof sizes[number]
export type TWorldView = typeof sizes[number]
export type TType = typeof sizes[number]

interface IStatData {
    displayName: string
    inputName: 'strength' | 'agility' | 'constitution' | 'intelligence' | 'wisdom' | 'charisma'
}

interface ISaveThrowStatData {
    displayName: string
    inputName: 'strengthSaveThrow' | 'agilitySaveThrow' | 'constitutionSaveThrow' | 'intelligenceSaveThrow' | 'wisdomSaveThrow' | 'charismaSaveThrow'
}

interface ISpeedData {
    speedNames: { displayName: string, inputName: 'speed' | 'speedClimb' | 'speedSwim' | 'speedFly' }[]
    validateFunction: Function
    asideValue: string
}

export const statsData: IStatData[] = [
    {
        displayName: 'Сил',
        inputName: 'strength'
    },
    {
        displayName: 'Лов',
        inputName: 'agility'
    },
    {
        displayName: 'Тел',
        inputName: 'constitution'
    },
    {
        displayName: 'Инт',
        inputName: 'intelligence'
    },
    {
        displayName: 'Мдр',
        inputName: 'wisdom'
    },
    {
        displayName: 'Хар',
        inputName: 'charisma'
    }
]

export const saveThrowsStatsData = statsData.map(statData => ({
    ...statData,
    inputName: statData.inputName + 'SaveThrow'
})) as ISaveThrowStatData[]

export const speedData: ISpeedData = {
    speedNames: [
        {displayName: 'Обычная', inputName: 'speed'},
        {displayName: 'Лазание', inputName: 'speedClimb'},
        {displayName: 'Плавание', inputName: 'speedSwim'},
        {displayName: 'Полёт', inputName: 'speedFly'}
    ],
    validateFunction: max999999,
    asideValue: '(фут)'
}