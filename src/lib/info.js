import me from '@/../public/profilePic.jpg';
import Parser from 'html-react-parser';

export const name = 'Abhigyan Bafna';
export const avatar = me;

export const hero = () => {
  return (
    <>
        Hey, I&apos;m <span className='text-pHighlight'> Abhigyan</span>, a passionate Web Developer
        who&apos;s curious about <span className='underline text-pHighlight'> AI. </span>
    </>
  );
};

export const info = (info) => {
  return <>{Parser(info)}</>;
};

