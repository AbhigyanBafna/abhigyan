import React from 'react';
import Navbar from '@/components/Navbar';
import SocialLinks from '@/components/SocialLinks';
import { Analytics } from '@vercel/analytics/react';

const Layout = ({ children, email, links }) => {

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
