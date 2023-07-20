import Layout from '../components/layout'
import { fetchProfile, fetchSocials } from '@/utils/fetchData';
import { PreviewSuspense } from 'next-sanity/preview';
import BlogList from '@/components/BlogList';
import { getClient, overlayDrafts } from '@/utils/sanityServer';
import { postsQuery, tagsQuery } from '@/utils/queries';
import { ArrowIcon } from '@/lib/icons';
import Tags from '@/components/Tags';


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

        {/* <div className='text-xl ml-4 mr-4 mt-5 mb-5 sm:max-w-[800px] overflow-hidden sm:mx-auto sm:text-2xl sm:mt-0'>
          <BlogList posts ={allPosts}/>
        </div> */}
          
        <div className='mx-auto text-center h-full max-w-[800px]'>

          <h1 className='text-4xl md:text-5xl md:mt-24'>
            Hey, welcome to <span className='text-pHighlight'>Arcane</span>.
          </h1>

          <p className='mt-7 text-lg md:text-xl'>
            Scripting the chronicle of my life, one blog at a time.
          </p>

          <div className="pt-14 flex flex-row gap-3 justify-center mb-5">
                    
            <a rel="noopener noreferrer" target="_blank" href={profile?.resume} className="flex w-1/6 border border-neutral-700 rounded-lg items-center text-pHighlight hover:bg-pText hover:text-background transition-all ">

              <div className="flex items-center mx-auto p-2">
                <ArrowIcon />
                <div className="text-lg ml-3">Explore</div>
              </div>
                
            </a>

            <a rel="noopener noreferrer" target="_blank" href={profile?.resume} className="flex w-1/6 border border-neutral-700 rounded-lg items-center text-neutral-200 hover:bg-pText hover:text-background transition-all ">

              <div className="flex items-center mx-auto p-2">
                <ArrowIcon />
                <div className="text-lg ml-3">Random</div>
              </div>
                
              </a>

          </div>

          <div className='flex flex-row items-center justify-center'>

            <hr className='w-1/6 border-white'/>
            <p className='px-4 text-xl'>OR</p>
            <hr className='w-1/6 border-white'/>

          </div>

          <div className='mt-5'>
            <Tags Tags={allTags} />
          </div>
          
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
      const allPosts = overlayDrafts(await getClient(previewMode).fetch(postsQuery));
      const allTags =  await getClient(false).fetch(tagsQuery);
  
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

  