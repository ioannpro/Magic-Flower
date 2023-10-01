import style from './ui.module.scss'
import { hind } from '../fonts'


export default function BlockInput() {
    return (
            <input className={`${style.block__input} ${hind.className}`} placeholder='hogin'/>
        )
}