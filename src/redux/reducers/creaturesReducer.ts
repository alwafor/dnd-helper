import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ICreatureData} from '../../types/creatureTypes';

const initialState = {
    creatures: [] as ICreatureData[]
}

export const creaturesSlice = createSlice({
    name: 'creatures',
    initialState,
    reducers: {
        addCreature(state, action: PayloadAction<ICreatureData>) {
            state.creatures.push(action.payload)
        }
    }
})