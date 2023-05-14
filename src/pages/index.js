import Image from 'next/image'
import Navbar from '@/components/Navbar'
import {AnimatedSocialIcon} from 'react-animated-social-icons'

export default function Home() {
  return (
    <div className='bg-background text-pText h-screen overflow-x-hidden'>
      <Navbar></Navbar>
      <p className='text-3xl mt-28 mx-auto text-center max-w-[800px]'>
        Hey, I'm <span className='text-pHighlight'> Abhigyan </span>, a passionate Web Developer
        who's highly curious about <span className='underline text-pHighlight'> AI </span>
      </p>

      <Image
        src={'/profilePic.jpg'}
        alt='Profile Picture'
        width={170}
        height={170}
        className='rounded-full grayscale hover:grayscale-0 mx-auto transition-all duration-500 my-8'
      />
      
      <p className='mt-10 text-xl text-center mx-auto w-[800px]'>
        I'm an engineering undergrad in awe with the Tech World. I develop web apps until the perfectionist 
        in me is satisfied. Still finding my place out here and enjoying it while the journey lasts.
      </p>

      <div className="absolute bottom-28 left-9 flex flex-col space-y-[-15px]">
        <AnimatedSocialIcon
          brandName="github"
          url="https://github.com/AbhigyanBafna"
          animation="shrink"
          defaultColor="gray"
          hoverColor="white"
          width="2em"
          animationDuration={0.8}
        />
        <AnimatedSocialIcon
          brandName="instagram"
          url="https://github.com/AbhigyanBafna"
          animation="shrink"
          defaultColor="gray"
          hoverColor="white"
          width="2em"
          animationDuration={0.8}
        />
    </div>

      <div class="absolute bottom-0 left-16 w-1 h-28 bg-gray-500 rounded-t"></div>
    </div>
  )
}
