import {ICreatureData} from '../types/creatureTypes';

export function statToModifier(stat: string) {
    return Math.floor((+stat - 10) / 2)
}

export function getCreatureStats({strength, agility, constitution, intelligence, wisdom, charisma}: ICreatureData) {
    return [{name: 'Сил', value: strength},{name: 'Лов', value: agility},{name: 'Тел', value: constitution},{name: 'Инт', value: intelligence},{name: 'Мдр', value: wisdom},{name: 'Хар', value: charisma}]
}

export function formHeadDescStr({size, type, worldview}: ICreatureData) {
    return `${size[0].toUpperCase() + size.slice(1)}, ${type}, ${worldview}`
}