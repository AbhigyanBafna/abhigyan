import { fetchProfile, fetchSocials } from '@/utils/fetchData';
import { PreviewSuspense } from 'next-sanity/preview';
import BlogList from '@/components/BlogList';
import { getClient, overlayDrafts } from '@/utils/sanityServer';
import { postsQuery, tagsQuery } from '@/utils/queries';
import { ArrowIcon } from '@/lib/icons';
import Tags from '@/components/Tags';
import Layout from '@/components/layout';


export default function Blog( {profile, links, previewMode, allPosts, allTags} ) {

  if( previewMode ){
    return(
      <PreviewSuspense fallback={(
        <div role='status'>
          <p className='text-center justify-center items-center text-2xl animate-pulse text-pHighlight'>
            Loading Preview Data...
          </p>
        </div>
      )}>

        <Layout email={profile?.email} socials={links}>

          <p className='text-xl ml-4 mr-4 mt-5 mb-5 sm:max-w-[800px] overflow-hidden sm:mx-auto sm:text-2xl sm:mt-0'>
            <BlogList posts ={allPosts}/>
          </p>

        </Layout>

      </PreviewSuspense>
    )
  }

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
      // const allPosts = await client.fetch(query);
      const allPosts = overlayDrafts(await getClient(previewMode).fetch(postsQuery));
  
      return {
        props: {
          profile: profile ?? null, 
          links: links ?? null,
          previewMode,
          allPosts,
          allTags
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

  