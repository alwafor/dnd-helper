import React from 'react';
import styles from './Checkbox.module.scss';

interface IProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    text: string,
    asideValue?: string | number
    value: any
}

export const Checkbox = React.forwardRef<HTMLInputElement, IProps>(({text, asideValue, value, ...rest}, ref) => {
    return <label className={styles.root + (rest.checked ? ' ' + styles.active : '')}>
        {text}
        <input ref={ref} type={'checkbox'} {...rest} aria-hidden className={styles.hiddenInput}/>
        <div className={styles.asideValue}>{asideValue}</div>
    </label>
});