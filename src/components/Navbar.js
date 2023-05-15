//The one with changing color, border and glassmorphism

import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

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

export default function Navbar({ shouldAnimate }) {
  let pathname = usePathname() || '/';

  if (!shouldAnimate) {

    return (
        <div className="sticky top-0 p-5 flex justify-between z-10">

          <div className="flex flex-row items-center pl-4 text-6xl text-pHighlight">
            <Link
              href={'/'}>
              ab
            </Link>
          </div>

          <div className="flex flex-row items-center pl-4 text-4xl text-sText transition-all duration-700">
          {Object.entries(navItems).map(([path, { name }]) => {
                const isActive = path === pathname;
                console.log(isActive)
                return (
                  <Link
                    key={path}
                    href={path}
                    className={clsx(
                      'px-4 hover:text-white',
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
            })}
          </div>

        <div className="flex flex-row items-center cursor-pointer">
          <SocialIcon network="email" fgColor="gray" bgColor="transparent" style={{ height: 90, width: 90 }}/>
        </div>

      </div>
    );
  }
  else {
  return (
    <motion.div 
        className="sticky top-0 p-5 flex justify-between z-10"
        transition={{ duration: 1 }}>

        <motion.div
            initial={{
                x: -500,
                opacity: 0,
                scale: 0.5,
              }}
              animate={{
                x: 0,
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.6,
              }}
              className="flex flex-row items-center pl-4 text-6xl text-pHighlight"
        >
          <Link
            href={'/'}>
            ab
          </Link>
        </motion.div>

        <div className="flex flex-row items-center pl-4 text-4xl text-sText transition-all duration-700">
          {Object.entries(navItems).map(([path, { name }]) => {
                const isActive = path === pathname;
                console.log(isActive)
                return (
                  <Link
                    key={path}
                    href={path}
                    className={clsx(
                      'px-4 hover:text-white',
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
            })}
            {/* <Link href={'/about'} className='px-4 hover:text-white active:text-white'>
              about
            </Link>
            <Link href={'/projects'} className="px-4 hover:text-white active:text-white">
              projects
            </Link>
            <Link href={'/blog'} className="px-4 hover:text-white active:text-white">
              blog
            </Link> */}
        </div>

        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.5,
          }}
          className="flex flex-row items-center cursor-pointer"
        >
          <SocialIcon network="email" fgColor="gray" bgColor="transparent" style={{ height: 90, width: 90 }}/>
      </motion.div>

    </motion.div>
  );
        }
}