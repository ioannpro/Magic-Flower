import style from './ui.module.scss'


export default function Container({children}: any) {
    return (
            <div className={style.container}>{children}</div>
        )
}