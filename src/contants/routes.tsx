import React from 'react';
import {CreateCreaturePage} from "../pages/create-creature-page/CreateCreaturePage";
import {BestiaryPage} from '../pages/bestiary-page/BestiaryPage';

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
        path: '/bestiary',
        component: <BestiaryPage/>
    }
]