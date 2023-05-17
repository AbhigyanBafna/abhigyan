import Image from 'next/image'
import Navbar from '@/components/Navbar'
import SocialLinks from '@/components/SocialLinks'
import { hero, avatar, bio } from '@/lib/info'

export default function Home() {
  return (
    <div className='bg-background text-pText h-screen overflow-x-hidden'>
      <Navbar shouldAnimate={true} />

      <p className='text-3xl mt-24 mx-auto text-center max-w-[800px]'>
        {hero()}
      </p>

      <Image
        src={ avatar }
        alt='Profile Picture'
        width={170}
        height={170}
        className='rounded-full grayscale hover:grayscale-0 mx-auto transition-all duration-500 my-8'
      />
      
      <p className='mt-10 text-xl text-center mx-auto w-[800px]'>
        {bio()}
      </p>

      <SocialLinks />
    </div>
  )
}
