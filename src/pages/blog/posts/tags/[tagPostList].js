import Layout from '@/components/layout';
import { postsByTagQuery, profileQuery, socialsQuery, tagsQuery } from '@/utils/queries';
import BlogList from '@/components/BlogList';
import { sanityClient } from '@/utils/sanityServer';
import { revalidationNum } from '@/lib/info';
import CustomHead from '@/components/CustomHead'

export default function Blog( {profile, links, tagPosts, currentTag} ) {

    return(
      <>
      <CustomHead title="Arc" image="https://abhigyan.tech/meta_Blog.png" url="https://abhigyan.tech/blog/posts" description="Scripting life's odesseys, one blog at a time." siteName="abhigyan.tech" altImg ="The word Arc in a shade of gold."/>
      <Layout email={profile?.email} links={links}>

        <div className='text-xl ml-4 mr-4 mt-5 mb-5 md:max-w-[800px] overflow-hidden md:mx-auto md:text-2xl md:mt-0'>
          <BlogList posts={tagPosts} tag={currentTag}/>
        </div>

      </Layout>
      </>
    )
}

export async function getStaticPaths() {
  try {
    const tags = await sanityClient.fetch(tagsQuery);

    const paths = tags.map((tag) => ({
      params: { tagPostList: tag },
    }));

    return { paths, fallback: true };
  } catch (error) {
    // Handle any potential errors here
    console.error("Error fetching slugs:", error);
    return { paths: [], fallback: true };
  }
}

export async function getStaticProps({params}) {

    try {
        const profile = await sanityClient.fetch(profileQuery);
        const links = await sanityClient.fetch(socialsQuery);
        const currentTag = params.tagPostList;
        const tagPosts = await sanityClient.fetch(postsByTagQuery(currentTag));
  
      return {
        props: {
          profile : profile ?? null,
          links : links ?? null,
          tagPosts : tagPosts ?? null,
          currentTag : currentTag ?? null,
        },
        revalidate: revalidationNum,
      };
    } catch (error) {
      console.error("Error fetching data:", error);
      return {
        props: {
          profile : null,
          links : null,
          tagPosts : null,
          currentTag : null,
        },
        revalidate: revalidationNum,
      };
    }
  }