import Container from '../ui/container'
import style from './background.module.scss'
import { motion } from 'framer-motion'


export default function BackgroundCatalog({children, height}: any) {

    return (
            <div className={style.main}>
                <motion.div 
                    className={style.back}
                    initial = {{opacity: 0}}
                    animate = {{opacity: 1}}
                    transition={{delay: 1.5, duration: 2}}
                >
                
                    <span className={style.circle_orange}></span>
                    <span className={style.circle_red}></span>
                    <span></span>
                    
                </motion.div>
                <div className={style.child}>{children}</div>
            </div>
        )
}