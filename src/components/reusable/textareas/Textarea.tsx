import React from 'react';
import styles from './Textarea.module.scss'

interface IProps extends React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {

}

export const Textarea: React.FC<IProps> = ({children, className, ...rest}) => {
    return <textarea className={styles.root + ' ' + className} {...rest}>
        {children}
    </textarea>
};