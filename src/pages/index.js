import Image from 'next/image'
import Navbar from '@/components/Navbar'
import SocialLinks from '@/components/SocialLinks'
import { hero, avatar, bio } from '@/lib/info'

export default function Home() {
  return (
    <div className='bg-background text-pText h-screen overflow-x-hidden'>
      <Navbar shouldAnimate={true} />

      <p className='p-2 text-2xl md:text-3xl mt-12 md:mt-16 mx-auto text-center max-w-[800px]'>
        {hero()}
      </p>

      <Image
        src={ avatar }
        alt='Profile Picture'
        width={180}
        height={180}
        className='rounded-full grayscale hover:grayscale-0 mx-auto transition-all duration-500 my-4 md:my-8 p-1'
      />
      
      <p className='p-6 md:p-1 mt-10 text-lg text-center mx-auto max-w-[800px]'>
        {bio()}
      </p>

      <SocialLinks />
    </div>
  )
}
