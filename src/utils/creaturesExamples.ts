import {ICreatureData} from '../types/creatureTypes'

export const creatureExampleDragon: ICreatureData = {
    imageUrl: 'http://tentaculus.ru/monsters/img/cute_monsters/ANCIENT_COPPER_DRAGON.jpg',
    name: 'Древний медный дракон',

    habitat: 'Холмы',
    type: 'Дракон',
    size: 'Гигантский',
    worldview: 'Хаотично-добрый',

    strength: '27',
    agility: '12',
    constitution: '25',
    intelligence: '20',
    wisdom: '17',
    charisma: '19',

    strengthSaveThrow: false,
    agilitySaveThrow: false,
    constitutionSaveThrow: false,
    intelligenceSaveThrow: false,
    wisdomSaveThrow: false,
    charismaSaveThrow: false,

    hp: '350',
    armor: '21',
    difficulty: '21',
    proficiencyBonus: '5',

    speed: '40',
    speedSwim: '0',
    speedFly: '80',
    speedClimb: '40',

    vision: '96',
    visionDark: '96',
    visionBlind: '48',
    visionTrue: '',

    //Skills
    athletics: false,

    acrobatics: false,
    sleightOfHand: false,
    stealth: false,

    arcana: false,
    history: false,
    investigation: false,
    nature: false,
    religion: false,

    animalHandling: false,
    insight: false,
    medicine: false,
    perception: false,
    survival: false,

    deception: false,
    intimidation: false,
    performance: false,
    persuasion: false,

    parameters: [
        {name: 'Иммунитет', value: 'Кислота'},
        {name: 'Язык', value: 'Общий, драконий'}
    ],
    features: [
        {name: 'Амфибия', value: 'Дракон может дышать и воздухом и под водой.'},
        {name: 'Легендарное Сопротивление (3/в день)', value: 'Если дракон провалил спасбросок, он может вместо этого считать его удачным.'}
    ],
    actions: [
        {name: 'Мультиатака', value: 'Дракон использует Ужасающую Внешность. После этого он проводит 3 атаки: две зубами и одну когтями.'},
        {name: 'Укус', value: 'Рукопашное Оружие: +15 к атаке, досягаемость 3 клетки, одна цель. Попадание: 19 (2d10 + 8) колющего урона.'},
        {name: 'Когти', value: 'Рукопашное Оружие: +15 к атаке, досягаемость: 2 клетки, одна цель. Попадание: 15 (2d6 + 8) рубящего урона.'},
        {name: 'Хвост', value: 'Рукопашное Оружие: +15 к атаке, досягаемость 4 клетки, одна цель. Попадание: 17 (2d8 + 8) дробящего урона.'},
        {name: 'Ужасающая Внешность', value: 'Каждое существо по выбору дракона в пределах 24 клеток должно бросить по Мудрости со сложностью 19. В случае неудачи существо становится испуганным. Существо может повторять спасбросок со сложностью в конце каждого своего хода. В случае успеха эфект страха заканчивается и существо становится имунным к Ужасающей Внешности на следующие 24 часа.'},
        {name: 'Оружие дыхания', value: 'Дракон использует одно из следующих оружий дыхания.'},
    ],
    legendaryActions: [
        {name: 'Обнаружение', value: 'Дракон проводит проверку Мудрости (Внимательность).'},
        {name: 'Атака Хвостом', value: 'Дракон проводит атаку хвостом.'},
        {name: 'Атака Крыльями (Требует 2 действия)', value: 'Дракон бьет крыльями. Каждое существо в пределах 3 клеток от дракона должно бросить спасбросок со сложностью 23 по Ловкости. В случае неудачи существо получает 15 (2d6 + 8) дробящего урона и сбивается с ног. Затем дракон может пролететь половину своей скорости полета.'}
    ],
    lairActions: [],
    regionalEffects: [],

    description: ''
}