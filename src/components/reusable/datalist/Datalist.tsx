import React from 'react'
import styles from './Datalist.module.css'

interface IProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLDataListElement>, HTMLDataListElement> {

}

export const Datalist = React.forwardRef<HTMLDataListElement, IProps>(({children, className, placeholder, ...rest}, ref) => {
    return <>
        <label>
            <input list="browsers" className={styles.root + ' ' + className} placeholder={placeholder}/>
        </label>
        <datalist id="browsers" ref={ref} {...rest} >
            {children}
        </datalist>
    </>
})