import RootLayout from '../utils/layout'
import { fetchInfo, fetchSocials } from '@/utils/fetchData';

export default function Blog( {libInfo, socials} ) {
    return(
        <RootLayout email={libInfo.email} socials={socials}>

            <p className='text-3xl mt-28 mx-auto text-center max-w-[800px]'>
                Coming Soon
            </p>

        </RootLayout>
    )
}

export async function getStaticProps() {
    const data = await fetchInfo();
    const libInfo = data.libInfo?.[0]
  
    const socials = await fetchSocials();
  
    return {
      props: {
        libInfo,
        socials,
      },

      revalidate: 10,
    };
};