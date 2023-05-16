import Navbar from '@/components/Navbar'
import SocialLinks from '@/components/SocialLinks'

export default function Projects() {
    
    return(
        <div className='bg-background text-pText h-screen overflow-x-hidden'>
            <Navbar shouldAnimate={false}/>
            <p className='text-4xl mt-16 mx-auto max-w-[800px]'>
            <span className='text-blue-700'>Pro</span>jects
            </p>

                        
            <a href="#" className="block max-w-sm p-6 mx-auto bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </a>

            <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-sText/20 scrollbar-thumb-secondary/80">

            </div>


            <SocialLinks />
        </div>
    )
}