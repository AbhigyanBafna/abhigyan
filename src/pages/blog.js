import Layout from '../components/layout'
import { fetchProfile, fetchSocials } from '@/utils/fetchData';
import { PreviewSuspense } from 'next-sanity/preview';
import BlogList from '@/components/BlogList';
import { getClient, overlayDrafts } from '@/utils/sanityServer';
import { postsQuery } from '@/utils/queries';


export default function Blog( {profile, links, previewMode, allPosts} ) {

  if( previewMode ){
    return(
      <PreviewSuspense fallback={(
        <div role='status'>
          <p className='text-center text-2xl animate-pulse text-pHighlight'>
            Loading Preview Data...
          </p>
        </div>
      )}>

        <Layout email={profile?.email} socials={links}>

          <p className='text-2xl mx-auto max-w-[800px]'>
            <BlogList posts ={allPosts}/>
          </p>

        </Layout>

      </PreviewSuspense>
    )
  }

    return(
        <Layout email={profile?.email} socials={links}>

            <div className='text-3xl mt-28 mx-auto text-center max-w-[800px]'>
                <BlogList posts ={allPosts}/>
            </div>

        </Layout>
    )
}

export async function getStaticProps(context) {
    try {
      const rawProfile = await fetchProfile();
      const profile = rawProfile.profile;
      const links = await fetchSocials();
      const previewMode = context.preview === true;
      // const allPosts = await client.fetch(query);
      const allPosts = overlayDrafts(await getClient(previewMode).fetch(postsQuery))
  
      return {
        props: {
          profile: profile ?? null, 
          links: links ?? null,
          previewMode,
          allPosts
        },
        revalidate: 10,
      };
    } catch (error) {
      console.error("Error fetching data:", error);
      return {
        props: {
          profile: null,
          links: null,
        },
        revalidate: 10,
      };
    }
  }

  