import Layout from '../utils/layout'
import { fetchInfo, fetchSocials } from '@/utils/fetchData';

export default function Blog( {libInfo, socials} ) {
    return(
        <Layout email={libInfo?.email} socials={socials}>

            <p className='text-3xl mt-28 mx-auto text-center max-w-[800px]'>
                Coming Soon
            </p>

        </Layout>
    )
}

export async function getStaticProps() {
    try {
      const data = await fetchInfo();
      const libInfo = data?.libInfo?.[0];
  
      const socials = await fetchSocials();
  
      return {
        props: {
          libInfo: libInfo ?? null, 
          socials: socials ?? null, 
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
  