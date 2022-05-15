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