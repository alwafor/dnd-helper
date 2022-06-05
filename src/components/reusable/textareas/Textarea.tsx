import React from 'react';
import styles from './Textarea.module.css'

interface IProps extends React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {

}

export const Textarea = React.forwardRef<HTMLTextAreaElement, IProps>(({children, className, ...rest}, ref) => {
    return <textarea className={styles.root + ' ' + className} ref={ref} {...rest}>
        {children}
    </textarea>
});