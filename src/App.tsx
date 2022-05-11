import React from 'react';
import styles from './App.module.scss';
import {Navbar} from "./components/navbar/Navbar";
import {Sidebar} from "./components/layout/sidebar/Sidebar";

function App() {
    return (
        <div className={styles.wrapper}>
            <Navbar/>
                <div className={'flex'}>
                    <Sidebar/>

                </div>

        </div>
    );
}

export default App;
