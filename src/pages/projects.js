import Navbar from '@/components/Navbar'
import SocialLinks from '@/components/SocialLinks'
import ProjectsContainer from '@/components/ProjectsContainer'

export default function Projects() {
    
    return(
        <div className='bg-background text-pText h-screen overflow-x-hidden'>
            <Navbar shouldAnimate={false}/>
            <p className='text-4xl mt-8 mx-auto max-w-[800px]'>
            <span className='text-blue-700'>Pro</span>jects
            </p>

            <ProjectsContainer />


            <SocialLinks />
        </div>
    )
}