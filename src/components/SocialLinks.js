import { AnimatedSocialIcon } from 'react-animated-social-icons';

export default function SocialLinks( {links} ) {

    return(
        <div>
            
            <div className='hidden md:block'>
                <div className="fixed bottom-28 left-9 flex flex-col space-y-[-15px]">

                    {links?.socials.map((social) => (

                    <AnimatedSocialIcon
                        key={social?._id}
                        url={social?.url}
                        brandName={social?.title.toLowerCase()}
                        animation="grow"
                        defaultColor="gray"
                        hoverColor="white"
                        width="1.75rem"
                        animationDuration={0.8}
                    />

                    ))}

                </div>

                <div className="fixed bottom-0 left-16 w-1 h-28 bg-gray-500 rounded-t"></div>
            </div>


            <div className='flex justify-center items-center mx-auto space-x-4 md:hidden'>
                    
                {links?.socials.map((social) => (
                    
                    <div key={social?._id}>

                        <AnimatedSocialIcon
                            url={social?.url}
                            brandName={social?.title.toLowerCase()}
                            animation="grow"
                            defaultColor="gray"
                            hoverColor="white"
                            width="1.75rem"
                            animationDuration={0.8}
                        />
                        
                    </div>
                ))}
 
            </div>
            
        </div>
    )
}