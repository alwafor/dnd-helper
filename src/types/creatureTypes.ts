import {TSize, TType, TWorldView} from '../contants/creatureContants';

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
}