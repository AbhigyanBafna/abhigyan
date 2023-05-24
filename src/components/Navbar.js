//The one with changing color, border and glassmorphism

import Link from "next/link";
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { SocialIcon } from "react-social-icons";
import { useState } from "react";

const navItems = {
  '/about': {
    name: 'about',
  },
  '/projects': {
    name: 'projects',
  },
  '/blog': {
    name: 'blog',
  },
};

export default function Navbar( {email} ) {
  let pathname = usePathname() || '/';

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return(
    <div className="mainNav">

        <div className="homeBar">

          <Link
            href={'/'}>
            ab
          </Link>


          <div 
            onClick={handleClick}
            className="md:hidden"
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
            >

            <SocialIcon 
              network="email" 
              fgColor="gray" 
              bgColor="transparent" 
              style={{ height: 70, width: 70 }}
            />

          </div>

        </div>

        <div className="subNav">

          {Object.entries(navItems).map(([path, { name }]) => {
                const isActive = path === pathname;
                return (
                  <Link
                    key={path}
                    href={path}
                    className={clsx(
                      'px-2 hover:text-white md:px-4',
                      {
                        'text-white': isActive,
                      }
                    )}
                  >
                    <span>
                      {name}
                    </span>
                  </Link>
                );
            })
          }

        </div>

      <div
        onClick={handleClick}
        className="mailToggle" 
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}
        >

        <SocialIcon 
          network="email" 
          fgColor={isHovered ? 'white' : 'gray'}
          bgColor="transparent" 
          style={{ height: 90, width: 90 }}
        />

      </div>

    </div>
  );
}