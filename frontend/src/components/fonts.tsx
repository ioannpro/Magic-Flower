import { Playfair_Display, Hind, Rubik } from 'next/font/google'

export const playfair_display = Playfair_Display({
    subsets: ['latin'],
    display: 'swap',
})

export const hind = Hind ({
    subsets: ['latin'],
    weight: ['300', '400', '600']
})

export const rubik = Rubik({
    subsets: ['latin']
})