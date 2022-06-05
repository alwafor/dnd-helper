import React from 'react';
import styles from './Select.module.css'

interface IProps extends  React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>{

}

export const Select = React.forwardRef<HTMLSelectElement, IProps>(({children,...rest}, ref) => {
    return <select ref={ref} className={styles.root} {...rest}>
        {children}
    </select>
});