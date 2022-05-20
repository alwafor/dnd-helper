import {configureStore} from '@reduxjs/toolkit';
import {createCreatureSlice} from '../reducers/createCreatureReducer';
import {creaturesSlice} from '../reducers/creaturesReducer';

const rootReducer = {
    createCreature: createCreatureSlice.reducer,
    creatures: creaturesSlice.reducer
}

export const store = configureStore({
    reducer: rootReducer
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch