import { Playfair_Display } from 'next/font/google'
import { Hind } from 'next/font/google'

export const playfair_display = Playfair_Display({
    subsets: ['latin'],
    display: 'swap',
})

export const hind = Hind ({
    subsets: ['latin'],
    display: 'swap',
    weight: '300'
})