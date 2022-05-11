import React from 'react';
import {CreateCreaturePage} from "../pages/create-creature-page/CreateCreaturePage";

interface IRoute {
    path: string,
    component: React.FC,
}

export const routes: IRoute[] = [
    {
        path: '/main',
        component: CreateCreaturePage
    }
]