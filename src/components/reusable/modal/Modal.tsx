import React from 'react'
import styles from './Modal.module.css'

import {createPortal} from 'react-dom'

import imgCross from './../../../assets/images/icons/icon-cross.png'

interface IProps {
    children: React.ReactElement | string,
    close: Function
    isOpen: boolean
}

export const Modal: React.FC<IProps> = ({
                                            children,
                                            close,
                                            isOpen
                                        }) => {

    if (!isOpen) return null

    return createPortal(<div className={styles.overlay} onClick={() => close()}>
        <div className={styles.modal} onClick={e => e.stopPropagation()}>
            <div className={styles.modalHeader}>
                <button className={styles.modalCross} onClick={() => close()}>
                    <img src={imgCross} alt='close'/>
                </button>
            </div>

            {children}
        </div>
    </div>, document.getElementById('portal')!)
}