import { info } from '@/lib/info'
import { ArrowIcon, FileIcon } from "@/lib/icons";
import Layout from '../utils/layout'
import { fetchInfo, fetchSocials } from '@/utils/fetchData';

export default function About( {libInfo, socials} ) {

    return(
        <Layout email={libInfo?.email} socials={socials}>

            <div className='mx-auto max-w-[800px] pr-4 pl-4'>

                <p className='text-4xl mt-8 md:mt-0'>
                    <span className='text-red-500'>About</span> Me
                </p>

                <p className='text-lg'>
                    { info(libInfo?.about1) }
                </p>

                <hr className='w-full mx-0 m-16 border-red-500' />

                <p className='text-lg mt-16'>
                    { info(libInfo?.about2) }
                </p>

                <div className="pt-8 flex flex-col gap-3 md:flex-row md:gap-2">
                    
                    <a rel="noopener noreferrer" target="_blank" href={libInfo?.resume} className="flex w-2/3 md:w-1/2 mx-auto pr-4 border border-neutral-700 rounded-lg items-center text-neutral-200 hover:bg-neutral-900 transition-all justify-between">

                        <div className="flex items-center p-5">
                            <FileIcon />
                            <div className="ml-3 font-bold text-xl">Resume</div>
                        </div>
                        <ArrowIcon />
                        
                    </a>

                </div>

            </div>

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
  