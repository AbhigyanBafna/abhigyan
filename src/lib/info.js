import Parser from 'html-react-parser';
export const name = 'Abhigyan Bafna';

export const hero = () => {
  return (
    <>
        Hey, I&apos;m <span className='text-pHighlight'> Abhigyan</span>, a passionate Web Developer
        who&apos;s curious about <span className='underline text-pHighlight'> AI. </span>
    </>
  );
};

export const info = (info) => {
  if (info === null || info === undefined) {
    return <>No information available</>;
  }
  
  return <>{Parser(info)}</> // Render the parsed info
};

export const metadata = {
  title: {
    default: 'Abhigyan Bafna',
    template: '%s | Abhigyan Bafna',
  },
  description: 'Developer, Movie Buff, Technophile, Personal Finance',
  openGraph: {
    title: 'Abhigyan Bafna',
    description: 'Developer, Movie Buff and Technophile.',
    url: 'https://abhigyan.vercel.app',
    siteName: 'Abhigyan Bafna',
    images: [
      {
        url: 'https://abhigyan.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FprofilePic.dddb8b02.jpg&w=384&q=75',
        width: 1920,
        height: 1080,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Abhigyan Bafna',
    card: 'summary_large_image',
  },
  icons: {
    shortcut: '/AB_light.ico',
  },
};
