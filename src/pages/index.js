import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-background text-pText h-screen overflow-x-hidden z-0'>
      <Navbar></Navbar>
      <div class="absolute inset-0 flex justify-center items-center">
          <p>
            Hey, I'm Abhigyan, a passionate <span className='text-pHighlight font-bold'>Web Developer</span> who's highly curious about AI.
          </p>
      </div>
    </div>
  )
}
