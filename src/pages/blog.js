import Layout from '../components/layout'
import { fetchProfile, fetchSocials } from '@/utils/fetchData';
import { groq } from 'next-sanity';
import { PreviewSuspense } from 'next-sanity/preview';
import PreviewBlogList from '@/components/PreviewBlogList';
import BlogList from '@/components/BlogList';
import { client } from '@/utils/sanityUtils';


const query = groq`
  *[_type=='post'] {
    ...,
    categories[]->,
  } | order(_createdAt desc)
`;

export default function Blog( {profile, links, previewMode, Userposts} ) {

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

          <p className='text-3xl mt-28 mx-auto text-center max-w-[800px]'>
            < PreviewBlogList query={query}/>
          </p>

        </Layout>

      </PreviewSuspense>
    )
  }

    return(
        <Layout email={profile?.email} socials={links}>

            <div className='text-3xl mt-28 mx-auto text-center max-w-[800px]'>
                <BlogList posts ={Userposts}/>
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
      const Userposts = await client.fetch(query);
  
      return {
        props: {
          profile: profile ?? null, 
          links: links ?? null,
          previewMode,
          Userposts
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

  