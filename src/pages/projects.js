import ProjectsContainer from '@/components/ProjectsContainer'
import Layout from '../utils/layout'
import { fetchInfo, fetchProjects, fetchSocials } from '@/utils/fetchData';

export default function Projects( {libInfo, socials, projects} ) {
    
    return(
        <Layout email={libInfo?.email} socials={socials}>
            
            <p className='text-4xl pl-3 pt-8 md:pt-0 mx-auto max-w-[800px]'>
                <span className='text-blue-600'>Pro</span>jects
            </p>

            <ProjectsContainer projects={projects} />

        </Layout>
    )
}

export async function getStaticProps() {
    try {
      const data = await fetchInfo();
      const libInfo = data?.libInfo?.[0];
  
      const socials = await fetchSocials();
      const projects = await fetchProjects();
  
      return {
        props: {
          libInfo: libInfo ?? null, 
          socials: socials ?? null, 
          projects: projects ?? null, 
        },
        revalidate: 10,
      };
    } catch (error) {
      console.error("Error fetching data:", error);
      return {
        props: {
          libInfo: null,
          socials: null,
          projects: null,
        },
        revalidate: 10,
      };
    }
  }
  

