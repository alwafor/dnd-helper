import React from 'react';
import styles from './NameSupplier.module.scss'

interface IProps {
    name: string
    children: React.ReactNode
}

export const NameSupplier: React.FC<IProps> = ({name, children}) => {
    return <div className={styles.nameSupplier}>
        <div className={styles.name}>
            {name}
        </div>
        {children}
    </div>
};