import Navbar from '@/components/Navbar'
import SocialLinks from '@/components/SocialLinks'
import { about, about2 } from '@/lib/info'

export default function About() {

    return(
        <div className='bg-background text-pText h-screen overflow-x-hidden'>
            <Navbar shouldAnimate={false}/>

            <p className='text-4xl mt-8 mx-auto max-w-[800px]'>
                <span className='text-red-500'>About</span> Me
            </p>

            <p className='text-lg mx-auto max-w-[800px]'>
                {about()}
            </p>

            <hr className='m-16 mx-auto max-w-[800px] border-red-500' />

            <p className='text-lg mt-16 mx-auto max-w-[800px] '>
                {about2()}
            </p>


            <SocialLinks />
        </div>
    )
}