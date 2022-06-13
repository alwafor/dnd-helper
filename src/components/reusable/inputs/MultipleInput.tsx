import React, {useEffect, useState} from 'react'
import styles from './Input.module.css'
import classNames from 'classnames'
import {removeSubstringFromStringWithComas} from '../../../utils/stringUtils'

import imgTriangle from '../../../assets/images/icons/triangle-icon-1.png'

interface IProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    dropdownValues: string[]
    setValue: Function
}

export const MultipleInput = React.forwardRef<HTMLInputElement, IProps>(({
                                                                             dropdownValues,
                                                                             setValue,
                                                                             className,
                                                                             ...rest
                                                                         }, ref) => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    useEffect(() => {
        const closeDropdownListener = () => setIsDropdownOpen(false)
        window.addEventListener('click', closeDropdownListener)

        return () => window.removeEventListener('click', closeDropdownListener)
    }, [])

    const handleInputClick = (e: React.MouseEvent<HTMLLabelElement>) => {
        e.stopPropagation()

        if (!isDropdownOpen)
            setIsDropdownOpen(true)
    }

    const handleDropdownItemClick = (e: React.MouseEvent<HTMLButtonElement>, dropdownValue: string) => {
        e.preventDefault()

        let inputValue = rest.value as string
        setValue(formNewValue(dropdownValue, inputValue, isDropdownValueSelected(dropdownValue)))
    }

    const formNewValue = (dropdownValue: string, inputValue: string, isDropdownValueSelected: boolean) => {
        if (isDropdownValueSelected)
            return removeSubstringFromStringWithComas(inputValue, dropdownValue)
        else
            return inputValue.length ? inputValue + ', ' + dropdownValue : dropdownValue
    }

    const isDropdownValueSelected = (dropdownValue: string) => (rest.value as string).includes(dropdownValue)

    const isInputLengthMoreThan10 = (rest.value as string).length > 10

    return <label className={styles.root} onClick={(e) => handleInputClick(e)}>
        <input className={classNames(styles.input, className)} ref={ref} {...rest}/>
        <img className={classNames(styles.dropdownInputIcon, {hidden: isInputLengthMoreThan10})} src={imgTriangle}/>
        <div className={classNames(styles.dropdown, {hidden: !isDropdownOpen})}>
            {
                dropdownValues.map(value =>
                    <button
                        className={classNames(styles.dropdownItem, {[styles.active]: isDropdownValueSelected(value)})}
                        key={value}
                        onClick={(e) => handleDropdownItemClick(e, value)}
                    >
                        {value}
                    </button>)
            }
        </div>
    </label>
})