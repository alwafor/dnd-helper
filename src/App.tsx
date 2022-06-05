import React from 'react';
import styles from './App.module.css';
import {Sidebar} from './components/layout/sidebar/Sidebar';
import {routes} from './contants/routes';
import {Route, Routes} from 'react-router-dom'

function App() {
    return (
        <div className={styles.wrapper}>
            <div className={'flex flex-col md:flex-row'}>
                <Sidebar/>
                <Routes>
                    {routes.map(route => <Route key={route.path} element={route.component} path={route.path}/>)}
                </Routes>
            </div>
        </div>
    );
}

export default App;
