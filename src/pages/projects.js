import Navbar from '@/components/Navbar'
import SocialLinks from '@/components/SocialLinks'

export default function Projects() {
    
    return(
        <div className='bg-background text-pText h-screen overflow-x-hidden'>
            <Navbar shouldAnimate={false}/>
            <p className='text-3xl mt-28 mx-auto text-center max-w-[800px]'>
                Projects Page
            </p>


            <SocialLinks />
        </div>
    )
}