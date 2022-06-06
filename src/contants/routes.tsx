import React from 'react';
import {CreateCreaturePage} from "../pages/create-creature-page/CreateCreaturePage";
import {BestiaryPage} from '../pages/bestiary-page/BestiaryPage';
import {CreaturePage} from '../pages/creature-page/CreaturePage';
import {SavePage} from '../pages/save-page/SavePage'

interface IRoute {
    path: string,
    component: JSX.Element,
}

export const routes: IRoute[] = [
    {
        path: '/create-creature',
        component: <CreateCreaturePage/>
    },
    {
        path: '/create-creature/:creatureName',
        component: <CreateCreaturePage/>
    },
    {
        path: '/bestiary',
        component: <BestiaryPage/>
    },
    {
        path: '/creature/:name',
        component: <CreaturePage/>
    },
    {
        path: '/save',
        component: <SavePage/>
    }
]