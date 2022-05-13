import React from 'react';
import styles from './Checkbox.module.scss';

interface IProps extends  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    isChecked: boolean,
    text: string,
    asideValue?: string | number
}

export const Checkbox: React.FC<IProps> = ({isChecked, text, asideValue, ...rest}) => {
    return <div className={styles.root + (isChecked ? ' ' + styles.active : '')} {...rest}>
        {text}
        <div className={styles.asideValue}>{asideValue}</div>
    </div>
};