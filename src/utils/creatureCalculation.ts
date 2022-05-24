import {ICreatureData} from '../types/creatureTypes';
import {addPlusToPositive} from './stringUtils';

export function statToModifier(stat: string) {
    return Math.floor((+stat - 10) / 2)
}

export function getCreatureStats({strength, agility, constitution, intelligence, wisdom, charisma}: ICreatureData) {
    return [{name: 'Сил', value: strength}, {name: 'Лов', value: agility}, {
        name: 'Тел',
        value: constitution
    }, {name: 'Инт', value: intelligence}, {name: 'Мдр', value: wisdom}, {name: 'Хар', value: charisma}]
}

export function formHeadDescStr({size, type, worldview}: ICreatureData) {
    return `${size[0].toUpperCase() + size.slice(1)}, ${type}, ${worldview}`
}

export const formSpeedStr = ({speed, speedClimb, speedFly, speedSwim}: ICreatureData) => {
    return `${speed} футов`
        + (+speedClimb > 0 ? `, ползая ${speedClimb} футов` : '')
        + (+speedFly > 0 ? `, летая ${speedFly} футов` : '')
        + (+speedSwim > 0 ? `, плавая ${speedSwim} футов` : '')
}

export const formVisionStr = ({vision, visionBlind, visionDark, visionTrue}: ICreatureData) => {
    return `зрение ${vision} футов`
        + (+visionBlind > 0 ? `, слепозрение ${visionBlind} футов` : '')
        + (+visionDark > 0 ? `, тёмнозрение ${visionDark} футов` : '')
        + (+visionTrue > 0 ? `, истинное зрение ${visionTrue} футов` : '')
}

export const formSaveThrowStr = ({
                                     strengthSaveThrow,
                                     agilitySaveThrow,
                                     constitutionSaveThrow,
                                     intelligenceSaveThrow,
                                     wisdomSaveThrow,
                                     charismaSaveThrow
                                 }: ICreatureData) => {
    return (strengthSaveThrow ? `СИЛ ${addPlusToPositive(+strengthSaveThrow)}` : '') +
        (agilitySaveThrow ? `ЛОВ ${addPlusToPositive(+agilitySaveThrow)}` : '') +
        (constitutionSaveThrow ? `ТЕЛ ${addPlusToPositive(+constitutionSaveThrow)}` : '') +
        (intelligenceSaveThrow ? `ИНТ ${addPlusToPositive(+intelligenceSaveThrow)}` : '') +
        (wisdomSaveThrow ? `МДР ${addPlusToPositive(+wisdomSaveThrow)}` : '') +
        (charismaSaveThrow ? `ХАР ${addPlusToPositive(+charismaSaveThrow)}` : '')
}

export const isThereSaveThrows = ({
                                      strengthSaveThrow,
                                      agilitySaveThrow,
                                      constitutionSaveThrow,
                                      intelligenceSaveThrow,
                                      wisdomSaveThrow,
                                      charismaSaveThrow
                                  }: ICreatureData) => {
    return [strengthSaveThrow, agilitySaveThrow, constitutionSaveThrow, intelligenceSaveThrow, wisdomSaveThrow, charismaSaveThrow].some(saveThrow => saveThrow)
}