
import Navbar from '@/components/Navbar'
import SocialLinks from '@/components/SocialLinks'

export default function About() {


    return(
        <div className='bg-background text-pText h-screen overflow-x-hidden'>
            <Navbar shouldAnimate={false}/>
            <p className='text-4xl mt-16 mx-auto max-w-[800px]'>
            <span className='text-red-500'>About</span> Me
            </p>

            <p className='text-lg mx-auto max-w-[800px]'>
                Hey, I'm Abhigyan, people do nick that to Abhi.
                <br /> <br />
                Tech got into me after I used inspect element on the latest iPhone's price at School. I try
                to take that passion and turn it into things that make our lives better. I've been 
                curious about AI ever since the Google Assitant talked back to me. Currently learning NextJS 
                and Python.
            </p>

            <hr className='m-16 mx-auto max-w-[800px] border-red-500' />

            <p className='text-lg mt-16 mx-auto max-w-[800px] '>
                Apart from Tech I do love a good game of Chess, am a Marvel fanboi, am up for discussing Personal 
                Finance or Startups and drink Coffee (obviously). I like having new experiences and attending 
                events that pique my interests.

                <br /> <br />
                
                If you are searching for a passionate and curious individual for collaboration, I'd love to be that guy. Let's make a meaningful impact.
            </p>


            <SocialLinks />
        </div>
    )
}