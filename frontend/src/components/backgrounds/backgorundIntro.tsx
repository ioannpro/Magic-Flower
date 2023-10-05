import Container from '../ui/container'
import style from './background.module.scss'
import { motion } from 'framer-motion'


export default function BackgroundIntro({children}: any) {
    return (
            <div className={style.main}>
                <Container>
                    <motion.div 
                        className={style.back}
                        initial = {{opacity: 0}}
                        animate = {{opacity: 1}}
                        transition={{delay: 1.5, duration: 2}}
                    >
                    
                        <span className={style.circle_orange} style={{left: 265, top: 60}}></span>
                        <span className={style.circle_red}></span>
                        <span></span>
                        
                    </motion.div>
                </Container>
                <div className={style.child_intro}>{children}</div>
            </div>
        )
}