import Image from 'next/image'
import { hero, info } from '@/lib/info'
import Layout from '../utils/layout'
import { motion } from 'framer-motion'
import { fetchInfo, fetchSocials } from '@/utils/fetchData';
import { urlFor } from '@/utils/sanityUtils';

export default function Home({ libInfo, links }) {
  console.log(libInfo)
  return (
    <Layout email={libInfo?.email} socials={links}>

      <p className='p-2 text-2xl md:text-3xl mt-12 md:mt-16 mx-auto text-center max-w-[800px]'>
        { hero() }
      </p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }} 
      >
        <Image
        src={urlFor(libInfo?.profilePic).url()}
        alt='Profile Picture'
        width={180}
        height={180}
        className='rounded-full grayscale hover:grayscale-0 mx-auto transition-all duration-500 my-4 md:my-8 p-1'
      />
      </motion.div>
      
      <p className='p-6 md:p-1 mt-10 text-lg md:text-xl text-center mx-auto max-w-[800px]'>
        { info(libInfo?.bio) }
      </p>

    </Layout>
  )
}

export async function getStaticProps() {
  try {
    const data = await fetchInfo();
    const libInfo = data?.libInfo?.[0];
    const links = await fetchSocials();

    return {
      props: {
        libInfo: libInfo ?? null, 
        links: links ?? null,
      },
      revalidate: 10,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        libInfo: null,
        links: null,
      },
      revalidate: 10,
    };
  }
}

