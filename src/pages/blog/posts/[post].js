import { postQuery, slugsQuery, socialsQuery, stringSlugsQuery } from '@/utils/queries';
import { getClient, overlayDrafts, sanityClient } from '@/utils/sanityServer';
import { PortableText } from '@portabletext/react'
import { RichTextComponents } from '@/components/RichTextComponents';

import { formatDate } from '@/utils/generalUtils';
import Tags from '@/components/Tags';
import SocialLinks from '@/components/SocialLinks';
import { revalidationNum } from '@/lib/info';
import PostLayout from '@/components/PostLayout';
import CustomHead from '@/components/CustomHead';
import { SocialIcon } from 'react-social-icons';
import { useState, useEffect } from 'react';
import { Provider, LikeButton } from "@lyket/react";
import { urlFor } from '@/utils/sanity';


export default function Post({ post, nextSlug, links }) {
  const [canShare, setCanShare] = useState(false);

  useEffect(() => {
    setCanShare(typeof navigator !== 'undefined' && navigator.share !== undefined);
  }, []);

  let metaImg = "https://abhigyan.tech/meta_Blog.png";

  const handleShare = async () => {
    let caption = 'Check out this cool blog post!\n';
    if (post?.altPost !== undefined && post?.altPost !== null) {
      caption = post.altPost + '\n';
    }
      
    try {
      if (canShare) {
        await navigator.share({
          title: post.title,
          text: caption,
          url: window.location.href,
        });
      } else {
        console.log('Share not supported on this browser');
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  if(!post?.body){

    return(
      <>
      <CustomHead title="Arc" image={metaImg} url="https://abhigyan.tech/blog/posts" description="Scripting life's odesseys, one blog at a time." siteName="abhigyan.tech" altImg ="The word Arc in a shade of gold."/>
      <PostLayout post={post} nextSlug={nextSlug} >

        <div className='px-5 md:max-w-[600px] overflow-hidden md:mx-auto flex flex-col items-center'>
          <h1 className='text-2xl mt-20 md:mt-40'>This post does not exist</h1>
        </div>

        <SocialLinks links={links} />

      </PostLayout>
      </>
    );
  }

  const tags = post?.tags?.map(item => item.title);

  metaImg = urlFor(post?.metaImage).url() || "https://abhigyan.tech/meta_Blog.png";

  return(
    <div className='font-nums'>
        <CustomHead
          title={post?.title}
          image={metaImg}
          url={`https://abhigyan.tech/blog/posts/${post?.slug?.current}`}
          description={post.altPost || "Scripting life's odesseys, one blog at a time."}
          siteName="abhigyan.tech"
          altImg="The word Arc in a shade of gold."
        />
        <PostLayout post={post} nextSlug={nextSlug}>

          <div className='md:pl-40'>

            <div className='px-5 md:max-w-[600px] overflow-hidden md:mx-auto flex flex-col sm:ml-5'>
            
              <h1 className='text-4xl font-sansM pt-5 md:pt-10'>{post.title}</h1>

              <div className='text-sText flex flex-row py-5 justify-between'> 
                <p className='font-nums'>{formatDate(post.date)}</p>
                <p>Abhigyan Bafna</p>
              </div>

              <PortableText value={post.body} components={RichTextComponents} />
              

              {/* Footer */}
              <div className='-ml-2 font-bold flex' >
                  <Provider apiKey="pt_6cf817c3974e7525d4f01c9371568f" 
                  theme={{
                    colors: {
                      text: "#FFB938",
                    }
                  }}>
                    <LikeButton
                      namespace="arc"
                      id={post?.slug?.current}
                      hideCounterIfLessThan={20000000000}
                      component={LikeButton.templates.Twitter}
                    />
                  </Provider>

                {canShare ? (
                  <button onClick={handleShare}>
                    <SocialIcon 
                      className="text-sText hover:text-pHighlight font-sansM -ml-3"
                      network="sharethis" 
                      fgColor="currentColor"
                      bgColor="transparent" 
                    />
                  </button>
                ) : (
                  null
                )}

              </div>


              <div className='flex flex-wrap mb-4 text-sm md:text-md md:mb-12'>
                  <Tags Tags={tags} />
              </div>

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

    return { paths, fallback: true };
  } catch (error) {
    // Handle any potential errors here
    console.error("Error fetching slugs:", error);
    return { paths: [], fallback: true };
  }
}

export async function getStaticProps( {params, preview} ) {

  try {
    const slug = params.post;
    const previewMode = preview === true;
    const postArray = overlayDrafts( await getClient(previewMode).fetch(postQuery(slug)) ); //
    const [post] = postArray;
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