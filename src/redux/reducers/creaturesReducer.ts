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
        }
    }
})