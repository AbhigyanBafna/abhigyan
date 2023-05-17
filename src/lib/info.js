import me from '@/../public/profilePic.jpg';

export const name = 'Abhigyan Bafna';
export const avatar = me;
export const hero = () => {
  return (
    <>
        Hey, I'm <span className='text-pHighlight'> Abhigyan</span>, a passionate Web Developer
        who's highly curious about <span className='underline text-pHighlight'> AI. </span>
    </>
  );
};
export const bio = () => {
  return (
    <>      
        I'm an engineering undergrad in awe with the Tech World. I develop web apps until the perfectionist 
        in me is satisfied. Still finding my place out here and enjoying it while the journey lasts.
    </>
  );
};

export const about = () => {
    return (
        <>
            Hey, I'm Abhigyan, people do nick that to <b>Abhi.</b>
            <br /> <br />
            Tech got into me after I used inspect element on the latest iPhone's price at School. I try
            to take that passion and turn it into things that make our lives better. I've been 
            curious about AI ever since the Google Assitant talked back to me in 2017. Currently learning NextJS 
            and Python.            
        </>
    );
};
export const about2 = () => {
    return (
        <>
            Apart from Tech I do love a good game of Chess, am a Marvel fanboi, am up for discussing Personal 
            Finance or Startups and drink Coffee (obviously). I like having new experiences and attending 
            events that pique my interests.
            <br /> <br />
            If you are searching for a passionate and curious individual for collaboration, I'd love to be that guy. Let's make a meaningful <b>impact.</b>
        </>
    )
}