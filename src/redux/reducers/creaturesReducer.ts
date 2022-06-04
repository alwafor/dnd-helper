import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ICreatureData} from '../../types/creatureTypes';
import {LocalStorage} from '../../utils/localStorage'

const initialState = {
    creatures: LocalStorage.getCreatures()
}

export const creaturesSlice = createSlice({
    name: 'creatures',
    initialState,
    reducers: {
        addCreature(state, action: PayloadAction<ICreatureData>) {
            state.creatures.push(action.payload)
            LocalStorage.addCreature(action.payload)
        },
        modifyCreature(state, {payload: {creatureData, oldName}}: PayloadAction<{creatureData: ICreatureData, oldName: string}>) {
            const creatureToModify = state.creatures.find(creature => creature.name === oldName)
            if(!creatureToModify) throw new Error(`The creature to modify doesn't exists!`)

            state.creatures = state.creatures.map(creature => {
                if(creature === creatureToModify) return creatureData
                return creature
            })
        }
    }
})

export const {addCreature, modifyCreature} = creaturesSlice.actions