import React from 'react';
import styles from './Select.module.scss'

interface IProps extends  React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>{

}

export const Select: React.FC<IProps> = ({children,...rest}) => {
    return <select className={styles.root} {...rest}>
        {children}
    </select>
};