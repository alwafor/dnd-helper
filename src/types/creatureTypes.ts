import {TSize, TType, TWorldView} from '../contants/creatureContants';
import {KeysMatching} from './utilityTypes';

export interface INameValue {
    name: string
    value: string
}

export interface ICreatureData {
    imageUrl: string
    name: string

    habitat: string
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

    parameters: INameValue[]
    features: INameValue[]
    actions: INameValue[]
    legendaryActions: INameValue[]
    lairActions: INameValue[]
    regionalEffects: INameValue[]

    description: string
}

export type TCreatureDataDynamicFields = KeysMatching<ICreatureData, INameValue[]>