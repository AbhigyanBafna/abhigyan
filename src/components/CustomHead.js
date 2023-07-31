import Head from 'next/head';

const CustomHead = ({ title, description, imageUrl, url }) => {

  return (
    <Head>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={title} />
      
      {/* Twitter Card tags */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:domain" content={url} />
      <meta name="twitter:creator" content={title} />

    </Head>
  );
};

export default CustomHead;
