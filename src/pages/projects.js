import ProjectsContainer from '@/components/ProjectsContainer'
import RootLayout from '../utils/layout'
import { fetchInfo, fetchProjects, fetchSocials } from '@/utils/fetchData';

export default function Projects( {libInfo, socials, projects} ) {
    
    return(
        <RootLayout email={libInfo.email} socials={socials}>
            
            <p className='text-4xl pl-3 pt-8 md:pt-0 mx-auto max-w-[800px]'>
                <span className='text-blue-600'>Pro</span>jects
            </p>

            <ProjectsContainer projects={projects} />

        </RootLayout>
    )
}

export async function getStaticProps() {
    const data = await fetchInfo();
    const libInfo = data.libInfo?.[0]
  
    const socials = await fetchSocials();
    const projects = await fetchProjects();
  
    return {
      props: {
        libInfo,
        socials,
        projects,
      },
      
      revalidate: 10,
    };
};