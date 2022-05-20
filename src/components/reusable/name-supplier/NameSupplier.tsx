import React from 'react';
import styles from './NameSupplier.module.scss'

interface IProps {
    name: string
    children: React.ReactNode
    className?: string
}

export const NameSupplier: React.FC<IProps> = ({name, className, children}) => {
    return <div className={styles.nameSupplier + (className ? ' ' + className : '')}>
        <div className={styles.name}>
            {name}
        </div>
        {children}
    </div>
};