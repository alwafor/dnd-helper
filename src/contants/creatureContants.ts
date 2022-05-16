import {Validate} from '../utils/validateForms';

export const types = ['Нежить', 'Абберация', 'Гуманоид'] as const
export const worldViews = ['Хаотично-злой', 'Нейтральный'] as const
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
    speedNames: {displayName: string, inputName: 'speed' | 'speedClimb' | 'speedSwim' | 'speedFly'}[]
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
    },
]

export const saveThrowsStatsData = statsData.map(statData => ({...statData, inputName: statData.inputName + 'SaveThrow'})) as ISaveThrowStatData[]

export const speedData: ISpeedData = {
    speedNames: [
        {displayName: 'Обычная', inputName: 'speed'},
        {displayName: 'Лазание', inputName: 'speedClimb'},
        {displayName: 'Плавание', inputName: 'speedSwim'},
        {displayName: 'Полёт', inputName: 'speedFly'}
    ],
    validateFunction: (value: string) => Validate(value).integer().max(999999).run(),
    asideValue: '(фут)'
}