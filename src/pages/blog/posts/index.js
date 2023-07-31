import BlogList from '@/components/BlogList';
import { getClient, overlayDrafts, sanityClient } from '@/utils/sanityServer';
import { postsQuery, profileQuery, socialsQuery} from '@/utils/queries';
import Layout from '@/components/layout';
import { blogMetaData, revalidationNum } from '@/lib/info';
import CustomHead from '@/components/CustomHead';

export default function Blog( {profile, links, allPosts} ) {

    return(
      <>
      <CustomHead title={blogMetaData.title} description={blogMetaData.description} imageUrl={blogMetaData.imageUrl} url={blogMetaData.url}/>
      <Layout email={profile?.email} links={links}>

        <div className='text-xl ml-4 mr-4 mt-5 mb-5 md:max-w-[800px] overflow-hidden md:mx-auto md:text-2xl md:mt-0'>
          <BlogList posts ={allPosts}/>
        </div>

      </Layout>
      </>
    )
}

export async function getStaticProps(context) {
  try {
    const profile = await sanityClient.fetch(profileQuery);
    const links = await sanityClient.fetch(socialsQuery);
    const previewMode = context.preview === true;
    const allPosts = overlayDrafts(await getClient(previewMode).fetch(postsQuery));

    return {
      props: {
        profile: profile ?? null, 
        links: links ?? null,
        allPosts: allPosts ?? null,
      },
      revalidate: revalidationNum,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        profile: null,
        links: null,
        allPosts: null,
      },
      revalidate: revalidationNum,
    };
  }
}

  