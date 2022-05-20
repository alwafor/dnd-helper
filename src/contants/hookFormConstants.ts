import {ICreatureData} from '../types/creatureTypes';

export const createCreatureDefaultValues: Partial<ICreatureData> = {
    imageUrl: 'https://www.pinclipart.com/picdir/big/36-361692_eps-svg-free-clipart-of-a-silhouetted-griffin.png',

    name: '',

    strength: '10',
    agility: '10',
    constitution: '10',
    intelligence: '10',
    wisdom: '10',
    charisma: '10',
    proficiencyBonus: '0',
    armor: '10',
    hp: '10',
    difficulty: '0',

    strengthSaveThrow: false,
    agilitySaveThrow: false,
    constitutionSaveThrow: false,
    intelligenceSaveThrow: false,
    wisdomSaveThrow: false,
    charismaSaveThrow: false,

    speed: '30',
    speedClimb: '0',
    speedFly: '0',
    speedSwim: '0',

    vision: '30',
    visionDark: '0',
    visionBlind: '0',
    visionTrue: '0'
}