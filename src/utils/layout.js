import React from 'react';
import Navbar from '@/components/Navbar';
import SocialLinks from '@/components/SocialLinks';

const RootLayout = ({ children, email, socials }) => {
  return (
    <div>
      <Navbar email={email} />
      {children}
      <SocialLinks links={socials} />
    </div>
  );
};

export default RootLayout;
