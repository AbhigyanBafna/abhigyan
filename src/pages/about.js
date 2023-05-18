import Navbar from '@/components/Navbar'
import SocialLinks from '@/components/SocialLinks'
import { about, about2 } from '@/lib/info'
import Link from 'next/link'
import { SocialIcon } from 'react-social-icons'
import { ArrowIcon, FileIcon } from "@/lib/icons";

export default function About() {

    return(
        <div className='bg-background text-pText h-screen overflow-x-hidden'>
            <Navbar shouldAnimate={false}/>

            <div className='mx-auto max-w-[800px] pr-4 pl-4'>
            <p className='text-4xl mt-8 md:mt-0'>
                <span className='text-red-500'>About</span> Me
            </p>

            <p className='text-lg'>
                {about()}
            </p>

            <hr className='w-full mx-0 m-16 border-red-500' />

            <p className='text-lg mt-16'>
                {about2()}
            </p>

            <div className="pt-8 flex flex-col gap-3 md:flex-row md:gap-2">
                
                <a rel="noopener noreferrer" target="_blank" href="https://github.com/leerob" className="flex w-2/3 md:w-1/2 mx-auto pr-4 border border-neutral-700 rounded-lg items-center text-neutral-200 hover:bg-neutral-900 transition-all justify-between">

                    <div className="flex items-center p-5">
                        <FileIcon />
                        <div className="ml-3 font-bold text-xl">Resume</div>
                    </div>
                    <ArrowIcon />
                    
                </a>

            </div>
            </div>

            <SocialLinks />
        </div>
    )
}