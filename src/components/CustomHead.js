import Head from 'next/head';

const CustomHead = ({title, image, url, description, siteName, altImg}) => {

  return (
    <Head>

      {/* Open Graph tags */}
      <meta property="og:title" content={title} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url}/>
      <meta property="og:description" content={description} />
      <meta property="og:locale" content="en-IN" />
      <meta property="og:type" content="website" />

      {siteName && <meta property="og:site_name" content={siteName} />}
      {altImg && <meta property="og:image:alt" content={altImg} />}

      {/* Twitter Card tags */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:site" content="@Abhigyan_Bafna"/>
      <meta name="twitter:creator" content="@Abhigyan_Bafna" />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {altImg && <meta name="twitter:image:alt" content={altImg} />}

    </Head>
  );
};




export default CustomHead;
