import Layout from '../../components/layout'
import { sanityClient } from '@/utils/sanityServer';
import { profileQuery, socialsQuery, stringSlugsQuery, tagsQuery } from '@/utils/queries';
import { ArrowIcon } from '@/lib/icons';
import Tags from '@/components/Tags';
import { blogMetaData, revalidationNum } from '@/lib/info';
import CustomHead from '@/components/CustomHead';

export default function Blog( {profile, links, allTags, allSlugs} ) {

  const getRandomSlug = () => {
    const randomIndex = Math.floor(Math.random() * allSlugs.length);
    return allSlugs[randomIndex];
  };

  let randomSlug = getRandomSlug();

    return(
      <>
      <CustomHead title={blogMetaData.title} description={blogMetaData.description} imageUrl={blogMetaData.imageUrl} url={blogMetaData.url}/>
      <Layout email={profile?.email} links={links}>
          
        <div className='mx-auto text-center md:max-w-[800px]'>

          <h1 className='text-4xl mt-20 md:text-5xl md:mt-24'>
            Hey, welcome to my <span className='text-pHighlight'>Arc</span>.
          </h1>

          <p className='mt-7 mx-10 text-lg md:text-xl'>
            Scripting life&apos;s odesseys, one blog at a time.
          </p>

          <div className="my-7 flex flex-row gap-3 justify-center">
                    
            <a rel="noopener noreferrer" href={"/blog/posts"} className="flex md:w-1/6 border border-neutral-700 rounded-lg items-center text-pHighlight hover:bg-pText hover:text-background transition-all ">

              <div className="flex items-center mx-auto p-2">
                <ArrowIcon />
                <div className="text-lg ml-3">Explore</div>
              </div>
                
            </a>

            <a rel="noopener noreferrer" href={`/blog/posts/${randomSlug}`} className="flex md:w-1/6 border border-neutral-700 rounded-lg items-center text-neutral-200 hover:bg-pText hover:text-background transition-all ">

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

          <div className='my-5'>
            <Tags Tags={allTags}  />
          </div>
          
          </div>

      </Layout>
      </>
    )
}

export async function getStaticProps() {

  try {
    const profile = await sanityClient.fetch(profileQuery);
    const links = await sanityClient.fetch(socialsQuery);
    const allTags =  await sanityClient.fetch(tagsQuery);
    const allSlugs = await sanityClient.fetch(stringSlugsQuery);

    return {
      props: {
        profile: profile ?? null, 
        links: links ?? null,
        allTags: allTags ?? null,
        allSlugs: allSlugs ?? null,
      },
      revalidate: revalidationNum,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
        props: {
          profile: null,
          links: null,
          allTags: null,
          allSlugs: null,
        },
        revalidate: revalidationNum,
      };
  }
}  