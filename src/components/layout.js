import React from 'react';
import Navbar from '@/components/Navbar';
import SocialLinks from '@/components/SocialLinks';
import { Analytics } from '@vercel/analytics/react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { metadata } from '@/lib/info';

const Layout = ({ children, email, links }) => {

  const router = useRouter();
  const isBlogPage = router.pathname.includes('/blog');

  useEffect(() => {
    // Update the metadata image URL when the component mounts
    const imageUrl = isBlogPage ? 'https://abhigyan.tech/meta_Blog.png' : 'https://abhigyan.tech/meta_Image.png';
    console.log(imageUrl);
    metadata.openGraph.image = imageUrl;
    metadata.twitter.image = imageUrl;
  }, [isBlogPage]);

  return (
    <div>
      <Navbar email={email} />
      {children}
      <Analytics />
      <SocialLinks links={links} />
    </div>
  );
};

export default Layout;
