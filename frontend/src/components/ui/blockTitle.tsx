import style from './ui.module.scss'
import { playfair_display } from '../fonts'


export default function BlockTitle({children}: any) {
    return (
            <h2 className={`${style.block__title} ${playfair_display.className}`}>{children}</h2>
        )
}