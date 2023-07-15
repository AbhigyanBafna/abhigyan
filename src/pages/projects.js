import ProjectsContainer from '@/components/ProjectsContainer'
import Layout from '../components/layout'
import { fetchProfile, fetchProjects, fetchSocials } from '@/utils/fetchData';

export default function Projects( {profile, links, projects} ) {
    
    return(
        <Layout email={profile?.email} socials={links}>
            
            <p className='text-4xl pl-3 pt-8 md:pt-0 mx-auto max-w-[800px]'>
                <span className='text-blue-600'>Pro</span>jects
            </p>

            <ProjectsContainer projects={projects} />

        </Layout>
    )
}

export async function getStaticProps() {
    try {
      const rawProfile = await fetchProfile();
      const profile = rawProfile.profile;
      const links = await fetchSocials();

      const projects = await fetchProjects();
  
      return {
        props: {
          profile: profile ?? null, 
          links: links ?? null, 
          projects: projects ?? null, 
        },
        revalidate: 10,
      };
    } catch (error) {
      console.error("Error fetching data:", error);
      return {
        props: {
          profile: null,
          links: null,
          projects: null,
        },
        revalidate: 10,
      };
    }
  }
  
  

