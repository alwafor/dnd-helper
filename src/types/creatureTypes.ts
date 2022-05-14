import {TSize, TType, TWorldView} from '../contants/cretureContants';

export interface ICreatureData {
    imageUrl: string

    name: string
    type: TType
    size: TSize
    worldview: TWorldView

    strength: number
    agility: number
    constitution: number
    intelligence: number
    wisdom: number
    charisma: number

    strengthSaveThrow: boolean
    agilitySaveThrow: boolean
    constitutionSaveThrow: boolean
    intelligenceSaveThrow: boolean
    wisdomSaveThrow: boolean
    charismaSaveThrow: boolean
}