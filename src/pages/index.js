import Image from 'next/image'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <div className='bg-background text-pText h-screen overflow-x-hidden'>
      <Navbar></Navbar>
      <p className='text-3xl mt-28 mx-auto text-center max-w-[800px]'>
        Hey, I'm <span className='text-pHighlight'> Abhigyan </span>, a passionate Web Developer
        who's highly curious about <span className='underline text-pHighlight'> AI </span>
      </p>
      <br/>
      <Image
        src={'/profilePic.jpg'}
        alt='Profile Picture'
        width={170}
        height={170}
        className='rounded-full grayscale hover:grayscale-0 mx-auto transition-all duration-500'
      />
      <p className='mt-10 text-xl text-center mx-auto w-[800px]'>
        I'm an engineering undergrad in awe with the Tech World. I develop web apps until the perfectionist 
        in me is satisfied. Still finding my place out here and enjoying it while the journey lasts.
      </p>
    </div>
  )
}
