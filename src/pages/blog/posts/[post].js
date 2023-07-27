import { postQuery, slugsQuery, socialsQuery, stringSlugsQuery } from '@/utils/queries';
import { sanityClient } from '@/utils/sanityServer';
import {PortableText} from '@portabletext/react'
import { RichTextComponents } from '@/components/RichTextComponents';

import { formatDate } from '@/utils/generalUtils';
import Tags from '@/components/Tags';
import SocialLinks from '@/components/SocialLinks';
import { revalidationNum } from '@/lib/info';
import PostLayout from '@/components/PostLayout';

export default function post( {post, nextSlug, links} ) {

  const tags = post?.tags?.map(item => item.title);

  return(
    <div className='font-nums'>
        <PostLayout post={post} nextSlug={nextSlug} >

          <div className='px-5 md:max-w-[600px] overflow-hidden md:mx-auto flex flex-col sm:ml-5'>
          
            <h1 className='text-4xl font-sansM pt-5 md:pt-10'>{post.title}</h1>

            <div className='text-sText flex flex-row py-5 justify-between'> 
              <p className='font-nums'>{formatDate(post.date)}</p>
              <p>Abhigyan Bafna</p>
            </div>

            <PortableText value={post.body} components={RichTextComponents} />

            {/* Footer */}
            <p className='text-2xl mx-auto my-6 font-sansM'>X</p>

            <div className='flex flex-wrap mb-4 text-sm md:text-md md:mb-12'>
                <Tags Tags={tags} />
            </div>

          </div>

          <SocialLinks links={links} />
        </PostLayout>
    </div>
  );
}

export async function getStaticPaths() {
  // Assuming getClient and slugsQuery are correctly defined and imported
  try {
    const slugs = await sanityClient.fetch(stringSlugsQuery);

    // Make sure slugs is an array and contains valid data
    if (!Array.isArray(slugs)) {
      throw new Error("Invalid data format for slugs. Expected an array.");
    }

    // Make sure each slug is a string
    const isValidSlug = slugs.every((slug) => typeof slug === "string");
    if (!isValidSlug) {
      throw new Error("Invalid data format for slugs. Each slug should be a string.");
    }

    const paths = slugs.map((post) => ({
      params: { post },
    }));

    return { paths, fallback: false };
  } catch (error) {
    // Handle any potential errors here
    console.error("Error fetching slugs:", error);
    return { paths: [], fallback: false };
  }
}

export async function getStaticProps({params}) {

  try {
    const slug = params.post;
    const post = await sanityClient.fetch(postQuery(slug));
    const links = await sanityClient.fetch(socialsQuery);

    // Fetch the list of slugs again to get the next slug
    const slugsData = await sanityClient.fetch(slugsQuery);

    // Extract the slugs from the array of objects
    const slugs = slugsData.map((item) => item.slug);

    // Find the index of the current slug
    const currentIndex = slugs.findIndex((s) => s === slug);

    // Calculate the index of the next slug
    const nextIndex = (currentIndex - 1) % slugs.length;

    // Retrieve the next slug
    const nextSlug = slugs.length === 1 ? null : slugs[nextIndex] || null;

    return {
      props: {
        post: post ?? null,
        nextSlug: nextSlug ?? null,
        links: links ?? null,
      },
      revalidate: revalidationNum,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        post: null,
        nextSlug: null,
        links: null,
      },
      revalidate: revalidationNum,
    };
  }
}