import { fetchProfile, fetchSocials } from '@/utils/fetchData';
import BlogList from '@/components/BlogList';
import { getClient, overlayDrafts } from '@/utils/sanityServer';
import { postsQuery} from '@/utils/queries';
import Layout from '@/components/layout';


export default function Blog( {profile, links, allPosts} ) {

    return(
      <Layout email={profile?.email} socials={links}>

        <div className='text-xl ml-4 mr-4 mt-5 mb-5 sm:max-w-[800px] overflow-hidden sm:mx-auto sm:text-2xl sm:mt-0'>
          <BlogList posts ={allPosts}/>
        </div>

      </Layout>
    )
}

export async function getStaticProps(context) {
    try {
      const profile = await fetchProfile();
      const links = await fetchSocials();
      const previewMode = context.preview === true;
      const allPosts = overlayDrafts(await getClient(previewMode).fetch(postsQuery));
  
      return {
        props: {
          profile: profile ?? null, 
          links: links ?? null,
          allPosts: allPosts ?? null,
        },
        revalidate: 10,
      };
    } catch (error) {
      console.error("Error fetching data:", error);
      return {
        props: {
          profile: null,
          links: null,
          allPosts: null,
        },
        revalidate: 10,
      };
    }
  }

  