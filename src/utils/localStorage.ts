import {ICreatureData} from '../types/creatureTypes'

export class LocalStorage {
    static getCreatures() {
        const creatures = localStorage.getItem('creatures')

        if(!creatures) return []

        let parsedCreatures = []
        try {
            parsedCreatures = JSON.parse(creatures)
        }
        catch (e) {
            console.error(`Error! Can parse creatures! Something is wrong with localStorage data!`)
            LocalStorage.clearStorage()
        }

        return parsedCreatures as ICreatureData[]
    }

    static addCreature(creature: ICreatureData) {
        const creatures = LocalStorage.getCreatures()
        creatures.push(creature)
        localStorage.setItem('creatures', JSON.stringify(creatures))
    }

    static removeCreature(creatureName: string) {
        let creatures = LocalStorage.getCreatures()
        creatures = creatures.filter(creature => creature.name !== creatureName)
        localStorage.setItem('creatures', JSON.stringify(creatures))
    }

    private static clearStorage() {
        localStorage.clear()
    }
}