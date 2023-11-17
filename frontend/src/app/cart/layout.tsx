import type { Metadata } from 'next'
import Header from '@/components/header/header'
import Footer from '@/components/footer/footer'


export const metadata: Metadata = {
    title: 'Magic Flower - Cart',
    description: 'Buy your magic bouquet at Magic Flower!',
}

export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}