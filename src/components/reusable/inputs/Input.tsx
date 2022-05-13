import React from 'react';
import styles from './Input.module.scss'

interface IProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
    asideValue?: string
}

export const Input: React.FC<IProps> = ( {asideValue, ...rest}) => {
    return <div className={styles.root}>
        <input className={styles.input} {...rest}/>
        <div className={styles.asideValue}>{asideValue}</div>
    </div>
};