import Logo from '@/components/Logo/Logo'
import { Main } from '../components/MainSection/Main'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Spiritual GPT',
  description: 'Get spiiitual answers with the power of AI',
}

export default function Home() {
  return (
    <div className="">
      <Logo />
      <Main />
    </div>
  )
}
