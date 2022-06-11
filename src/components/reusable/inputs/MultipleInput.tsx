import React, {useEffect, useState} from 'react'
import styles from './Input.module.css'
import classNames from 'classnames'

interface IProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    dropdownValues: string[],
    setValue: Function,
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

    const handleDropdownItemClick = (e: React.MouseEvent<HTMLButtonElement>, value: string) => {
        e.preventDefault()

        let inputValue = rest.value as string
        setValue(formReplaceValue(value, inputValue, isDropdownValueSelected(value)))
    }

    const formReplaceValue = (value: string, inputValue: string, isDropdownValueSelected: boolean) => {
        let replaceValue: string

        if (isDropdownValueSelected) {
            replaceValue = inputValue.replace(new RegExp(`,?\\s*${value}`, 'i'), '')
            if (replaceValue.split(/,\s*/).length === 2)
                replaceValue = replaceValue.replace(/,\s*/, '')
        } else {
            if (!inputValue.length)
                replaceValue = value
            else
                replaceValue = (rest.value as string) + ', ' + value
        }

        return replaceValue
    }

    const isDropdownValueSelected = (dropdownValue: string) => (rest.value as string).includes(dropdownValue)

    return <label className={styles.root} onClick={(e) => handleInputClick(e)}>
        <input className={classNames(styles.input, className)} ref={ref} {...rest}/>
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