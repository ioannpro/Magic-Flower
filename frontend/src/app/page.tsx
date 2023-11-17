import Index from "@/components/screens/index";
import type { Metadata } from 'next'


export const metadata: Metadata = {
    title: 'Magic Flower - Magic in every flower ',
    description: 'Buy your magic bouquet at Magic Flower!',
  }

export default function IndexPage() {
    return (
            <Index />
        )
}