import React from 'react';
import styles from './Button.module.scss'
interface IProps extends  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{

}

export const Button: React.FC<IProps> = ({children, className, ...rest}) => {
    return <button className={styles.root + ' ' + className} {...rest}>
        {children}
    </button>
};