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

export const metaData = {

  openGraph: {
    title: 'Abhigyan Bafna',
    description: 'Code. Coffee. Marvel.',
    url: 'https://abhigyan.tech',
    siteName: 'Abhigyan Bafna',
    image: 'https://abhigyan.tech/meta_Image.png',
    locale: 'en-IN',
    type: 'website',
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

};

export const blogMetaData = {

  openGraph: {
    title: 'Arc',
    description: "Scripting life's odesseys, one blog at a time.",
    url: 'https://abhigyan.tech/blog',
    siteName: 'Arc',
    image: 'https://abhigyan.tech/meta_Blog.png',
    locale: 'en-IN',
    type: 'website',
  },

  twitter: {
    title: 'Arc',
    card: 'summary_large_image',
    description: "Scripting life's odesseys, one blog at a time.",
    site: "@Abhigyan_Bafna",
    image: 'https://abhigyan.tech/meta_Blog.png',
    image_alt: "The word Arc written in Gold",
    creator: "Abhigyan Bafna",
    domain: 'https://abhigyan.tech/blog',
  },

}

export const sanityConfig = {
  dataset: 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn:
    typeof document !== 'undefined' && process.env.NODE_ENV === 'production',
    //Server side document will be undefined and hence will return false.
  apiVersion: '2023-05-21',
}

export const revalidationNum = 30;
