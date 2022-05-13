import React from 'react';
import styles from './Input.module.scss'

interface IProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
    asideValue?: string | number
}

export const Input = React.forwardRef<HTMLInputElement, IProps>( ({asideValue, ...rest}, ref) => {
    return <div className={styles.root}>
        <input className={styles.input} ref={ref} {...rest}/>
        <div className={styles.asideValue}>{asideValue}</div>
    </div>
});