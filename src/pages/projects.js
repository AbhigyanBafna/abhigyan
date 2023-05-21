import ProjectsContainer from '@/components/ProjectsContainer'
import RootLayout from './layout'

export default function Projects() {
    
    return(
        <RootLayout>
            
            <p className='text-4xl mt-8 mx-auto max-w-[800px]'>
                <span className='text-blue-700'>Pro</span>jects
            </p>

            <ProjectsContainer />

        </RootLayout>
    )
}