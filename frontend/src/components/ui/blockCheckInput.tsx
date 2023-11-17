'use client'
import style from './ui.module.scss'
import { hind } from '../fonts'
import { useState } from 'react'


export default function BlockCheckInput({children, check, change}: any) {
    const [checkStatus, setCheckStatus] = useState(check)

    return (
        <div className={hind.className}>
            <input className={style.block__checkbox} type='checkbox' id={children} onChange={change} onClick={() => setCheckStatus(!checkStatus)} checked={checkStatus}/>
            <label className={style.block__checkbox_label} htmlFor={children}>{children}</label>
        </div>
        )
}