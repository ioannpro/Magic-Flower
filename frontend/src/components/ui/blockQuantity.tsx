'use client'
import { useState } from 'react'

import style from './ui.module.scss'
import { hind } from '../fonts';


export default function BlockQuantity({startQuantity}: {startQuantity: number}) {
    const [quantity, setQuantity] = useState(startQuantity);

    return (
            <div className={`${style.block__quantity} ${hind.className}`}>
                <div onClick={() => quantity != 0 ? setQuantity(quantity - 1): setQuantity(0)}>-</div>
                <div>{quantity}</div>
                <div onClick={() => setQuantity(quantity + 1)}>+</div>
            </div>
        )
}