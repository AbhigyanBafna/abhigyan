//The one with changing color, border and glassmorphism

import Link from "next/link";
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { SocialIcon } from "react-social-icons";

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

export default function Navbar() {
  let pathname = usePathname() || '/';

  return(
    <div className="mainNav">

        <div className="homeBar">

            <Link
              href={'/'}>
              ab
            </Link>


          <div className="md:hidden">
            <SocialIcon network="email" fgColor="gray" bgColor="transparent" style={{ height: 70, width: 70 }}/>
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

      <div className="mailToggle">
        <SocialIcon network="email" fgColor="gray" bgColor="transparent" style={{ height: 90, width: 90 }}/>
      </div>

    </div>
  );
}