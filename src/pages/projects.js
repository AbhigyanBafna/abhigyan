import ProjectsContainer from '@/components/ProjectsContainer'
import Layout from '../components/layout'
import { sanityClient } from '@/utils/sanityServer';
import { profileQuery, projectsQuery, socialsQuery } from '@/utils/queries';
import { revalidationNum } from '@/lib/info';
import CustomHead from '@/components/CustomHead';

export default function Projects( {profile, links, projects} ) {
    
    return(
      <>
        <CustomHead title="Abhigyan Bafna" image="https://abhigyan.tech/meta_Image.png" url="https://abhigyan.tech/projects" description="Code. Coffee. Marvel." siteName="abhigyan.tech" altImg ="The letters a and b in a shade of gold."/>
        <Layout email={profile?.email} links={links}>
            
            <p className='text-4xl pl-3 pt-8 md:pt-0 mx-auto max-w-[800px]'>
                <span className='text-blue-600'>Pro</span>jects
            </p>

            <ProjectsContainer projects={projects} />

        </Layout>
      </>
    )
}

export async function getStaticProps() {

  try {
    const profile = await sanityClient.fetch(profileQuery);
    const links = await sanityClient.fetch(socialsQuery);
    const projects = await sanityClient.fetch(projectsQuery);

    return {
      props: {
        profile: profile ?? null, 
        links: links ?? null, 
        projects: projects ?? null, 
      },
      revalidate: revalidationNum,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        profile: null,
        links: null,
        projects: null,
      },
      revalidate: revalidationNum,
    };
  }
}
  
  

