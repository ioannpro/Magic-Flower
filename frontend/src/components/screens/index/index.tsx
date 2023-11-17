"use client"
import style from '@/components/screens/index/index.module.scss'
import { playfair_display } from '@/components/fonts'
import BackgroundIntro from '@/components/backgrounds/backgorundIntro'
import BlockTitle from '@/components/ui/blockTitle'
import Container from '@/components/ui/container'
import { motion } from 'framer-motion'
import Header from '@/components/header/header'
import Footer from '@/components/footer/footer'


export default function Index() {
    return (
            <div>
                <motion.div
                    initial = {{opacity: 0, y: -74}}
                    animate = {{opacity: 1, y: 10}}
                    transition={{duration: 4, delay: 1}}
                    >
                    <Header />
                </motion.div>
                
                <BackgroundIntro>
                    <Container>
                        <motion.div 
                            className={style.intro}
                            initial = {{opacity: 0}}
                            animate = {{opacity: 1}}
                            transition={{duration: 4, delay: 1}}
                        />
                    </Container>
                    <motion.div className={`${style.intro__title} ${playfair_display.className}`}
                        initial = {{marginLeft: -500, letterSpacing: '1em', opacity: 0}}
                        animate = {{marginLeft: 0, letterSpacing: '0.175em', opacity: 1}}
                        transition={{duration: 4, delay: 2}}
                    >
                        Magic Flower
                    </motion.div>
                </BackgroundIntro>
                <Footer />
            </div>
        )
}