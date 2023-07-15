import Parser from 'html-react-parser';

export const hero = (profession) => {
  return (
    <>
        Hey, I&apos;m <span className='text-pHighlight'> Abhigyan</span>, a passionate &nbsp;{profession}&nbsp;
        who&apos;s curious about <span className='underline text-pHighlight'> AI. </span>
    </>
  );
};

export const htmlFormatter = (info) => {
  if (info === null || info === undefined) {
    return <>No information available</>;
  }
  
  return <>{Parser(info)}</> // Render the parsed info
};

export const metadata = {
  title: {
    default: 'Abhigyan Bafna',
  },
  description: 'Developer, movie-buff and creator.',
  openGraph: {
    title: 'Abhigyan Bafna',
    description: 'Code. Coffee. Marvel.',
    url: 'https://abhigyan.tech',
    siteName: 'Abhigyan Bafna',
    image: 'https://abhigyan.tech/meta_Image.png',
    locale: 'en-IN',
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
    description: 'Code. Coffee. Marvel.',
    site: "@Abhigyan_Bafna",
    image: 'https://abhigyan.tech/meta_Image.png',
    image_alt: "The letters a and b",
    creator: "Abhigyan Bafna",
    domain: 'https://abhigyan.tech',
  },
  icons: {
    shortcut: 'https://abhigyan.tech/AB_light.ico',
  },
};
