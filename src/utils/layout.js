import React from 'react';
import Navbar from '@/components/Navbar';
import SocialLinks from '@/components/SocialLinks';
import { Analytics } from '@vercel/analytics/react';

const Layout = ({ children, email, socials }) => {
  return (
    <div>
      <Navbar email={email} />
      {children}
      <Analytics />
      <SocialLinks links={socials} />
    </div>
  );
};

export default Layout;
