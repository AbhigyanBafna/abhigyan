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

export const sanityConfig = {
  dataset: 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn:
    typeof document !== 'undefined' && process.env.NODE_ENV === 'production',
    //Server side document will be undefined and hence will return false.
  apiVersion: '2023-05-21',
}

export const revalidationNum = 30;
