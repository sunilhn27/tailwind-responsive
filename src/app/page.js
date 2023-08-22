import CssUnits from '@/components/CssUnits'
import Experience from '@/components/Experience'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='font-sans '>
      <Hero />
      <Services/>
      <Experience/>
    </main>
  )
}
