import Image from 'next/image'
import { hero, htmlFormatter } from '@/lib/info'
import Layout from '../components/layout'
import { motion } from 'framer-motion'
import { fetchSocials, fetchProfile } from '@/utils/fetchData';
import { urlFor } from '@/utils/sanityUtils';

export default function Home({ profile, links }) {
  
  return (
    <Layout email={profile?.email} socials={links}>

      <p className='p-2 text-2xl md:text-3xl mt-12 md:mt-16 mx-auto text-center max-w-[800px]'>
        { hero(profile?.profession) }
      </p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }} 
      >
        <Image
        src={urlFor(profile?.profilePic).url()}
        alt='Profile Picture'
        width={180}
        height={180}
        className='rounded-full grayscale hover:grayscale-0 mx-auto transition-all duration-500 my-4 md:my-8 p-1'
      />
      </motion.div>
      
      <p className='p-6 md:p-1 mt-10 text-lg md:text-xl text-center mx-auto max-w-[800px]'>
        { htmlFormatter(profile?.homeText) }
      </p>

    </Layout>
  )
}

export async function getStaticProps() {

  try {
    const rawProfile = await fetchProfile();
    const profile = rawProfile.profile;
    const links = await fetchSocials();

    return {
      props: {
        profile: profile ?? null, 
        links: links ?? null,
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

