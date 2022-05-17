import {min0max999999} from '../utils/validateForms';

export const types = ['Растение', 'Абберация', 'Гуманоид', 'Великан', 'Фея', 'Слизь', 'Конструкт', 'Нежить', 'Дракон', 'Небожитель', 'Демон', 'Элементаль', 'Чудовище'] as const
export const worldViews = ['Хаотично-добрый', 'Хаотично-нейтральный', 'Хаотично-злой', 'Нейтрально-добрый', 'Нейтральный', 'Нейтрально-злой', 'Законно-добрый', 'Законно-нейтральный', 'Законно-злой'] as const
export const sizes = ['Мелкий', 'Маленький', 'Средний', 'Большой', 'Огромный', 'Гигантский'] as const

export type TSize = typeof sizes[number]
export type TWorldView = typeof sizes[number]
export type TType = typeof sizes[number]

type TStat = 'strength' | 'agility' | 'constitution' | 'intelligence' | 'wisdom' | 'charisma'
type TSkill = 'athletics'
    | 'acrobatics'
    | 'sleightOfHand'
    | 'stealth'
    | 'arcana'
    | 'history'
    | 'investigation'
    | 'nature'
    | 'religion'
    | 'animalHandling'
    | 'insight'
    | 'medicine'
    | 'perception'
    | 'survival'
    | 'deception'
    | 'intimidation'
    | 'performance'
    | 'persuasion'

interface IStatData {
    displayName: string
    inputName: TStat
}

interface ISaveThrowStatData {
    displayName: string
    inputName: 'strengthSaveThrow' | 'agilitySaveThrow' | 'constitutionSaveThrow' | 'intelligenceSaveThrow' | 'wisdomSaveThrow' | 'charismaSaveThrow'
}

interface IInputData {
    validateFunction: Function
    asideValue: string
}

interface IVisionData extends IInputData {
    visionNames: { displayName: string, inputName: 'vision' | 'visionDark' | 'visionBlind' | 'visionTrue' }[]
}

interface ISpeedData extends IInputData {
    speedNames: { displayName: string, inputName: 'speed' | 'speedClimb' | 'speedSwim' | 'speedFly' }[]
}

interface ISkillData {
    inputName: TSkill
    displayName: string
    stat: TStat
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
    validateFunction: min0max999999,
    asideValue: '(фут)'
}

export const visionData: IVisionData = {
    visionNames: [
        {displayName: 'Обычное', inputName: 'vision'},
        {displayName: 'Слепое', inputName: 'visionBlind'},
        {displayName: 'Тёмное', inputName: 'visionDark'},
        {displayName: 'Истинное', inputName: 'visionTrue'}
    ],
    asideValue: '(фут)',
    validateFunction: min0max999999
}

export const skillsData: ISkillData[] = [
    {inputName: 'athletics', displayName: 'Атлетика', stat: 'strength'},

    {inputName: 'acrobatics', displayName: 'Акробатика', stat: 'agility'},
    {inputName: 'sleightOfHand', displayName: 'Ловкость рук', stat: 'agility'},
    {inputName: 'stealth', displayName: 'Скрытность', stat: 'agility'},

    {inputName: 'arcana', displayName: 'Магия', stat: 'intelligence'},
    {inputName: 'history', displayName: 'История', stat: 'intelligence'},
    {inputName: 'investigation', displayName: 'Расследование', stat: 'intelligence'},
    {inputName: 'nature', displayName: 'Природа', stat: 'intelligence'},
    {inputName: 'religion', displayName: 'Религия', stat: 'intelligence'},

    {inputName: 'animalHandling', displayName: 'Обращение с животными', stat: 'wisdom'},
    {inputName: 'insight', displayName: 'Проницательность', stat: 'wisdom'},
    {inputName: 'medicine', displayName: 'Медицина', stat: 'wisdom'},
    {inputName: 'perception', displayName: 'Внимательность', stat: 'wisdom'},
    {inputName: 'survival', displayName: 'Выживание', stat: 'wisdom'},

    {inputName: 'deception', displayName: 'Обман', stat: 'charisma'},
    {inputName: 'intimidation', displayName: 'Запугивание', stat: 'charisma'},
    {inputName: 'performance', displayName: 'Выступление', stat: 'charisma'},
    {inputName: 'persuasion', displayName: 'Убеждение', stat: 'charisma'}
]

