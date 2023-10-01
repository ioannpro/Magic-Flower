import style from './background.module.scss'


export default function BackgroundIntro({children}: any) {
    return (
            <div className={style.main}>
                <div className={style.back}>
                    <span className={style.circle_orange}></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={style.child}>{children}</div>
            </div>
        )
}