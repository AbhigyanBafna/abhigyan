import Layout from '../utils/layout'
import { fetchInfo, fetchSocials } from '@/utils/fetchData';
import { groq } from 'next-sanity';
import { PreviewSuspense } from 'next-sanity/preview';
import PreviewBlogList from '@/components/PreviewBlogList';

const query = groq`
  *[_type=='post'] {
    ...,
    author->,
    categories[]->,
  } | order(_createdAt desc)
`;

export default function Blog( {libInfo, socials, previewMode} ) {

  if( previewMode ){
    return(
      <PreviewSuspense fallback={(
        <div role='status'>
          <p className='text-center text-2xl animate-pulse text-pHighlight'>
            Loading Preview Data...
          </p>
        </div>
      )}>

        < PreviewBlogList query={query}/>

      </PreviewSuspense>
    )
  }

    return(
        <Layout email={libInfo?.email} socials={socials}>

            <p className='text-3xl mt-28 mx-auto text-center max-w-[800px]'>
                Coming Soon
            </p>

        </Layout>
    )
}

export async function getStaticProps(context) {
    try {
      const data = await fetchInfo();
      const libInfo = data?.libInfo?.[0];
      const previewMode = context.preview === true;
  
      const socials = await fetchSocials();
  
      return {
        props: {
          libInfo: libInfo ?? null, 
          socials: socials ?? null, 
          previewMode,
        },
        revalidate: 10,
      };
    } catch (error) {
      console.error("Error fetching data:", error);
      return {
        props: {
          libInfo: null,
          socials: null,
        },
        revalidate: 10,
      };
    }
  }
  