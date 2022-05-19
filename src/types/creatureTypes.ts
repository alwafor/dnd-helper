import {TSize, TType, TWorldView} from '../contants/creatureContants';

interface IParameter {
    name: string
    value: string
}

export interface ICreatureData {
    imageUrl: string

    name: string
    type: TType
    size: TSize
    worldview: TWorldView

    strength: string
    agility: string
    constitution: string
    intelligence: string
    wisdom: string
    charisma: string

    strengthSaveThrow: boolean
    agilitySaveThrow: boolean
    constitutionSaveThrow: boolean
    intelligenceSaveThrow: boolean
    wisdomSaveThrow: boolean
    charismaSaveThrow: boolean

    hp: string
    armor: string
    difficulty: string
    proficiencyBonus: string

    speed: string
    speedSwim: string
    speedFly: string
    speedClimb: string

    vision: string
    visionDark: string
    visionBlind: string
    visionTrue: string

    //Skills
    athletics: boolean

    acrobatics: boolean
    sleightOfHand: boolean
    stealth: boolean

    arcana: boolean
    history: boolean
    investigation: boolean
    nature: boolean
    religion: boolean

    animalHandling: boolean
    insight: boolean
    medicine: boolean
    perception: boolean
    survival: boolean

    deception: boolean
    intimidation: boolean
    performance: boolean
    persuasion: boolean

    parameters: IParameter[]
    actions: IParameter[]

    description: string
}