//The one with changing color, border and glassmorphism

import { motion } from "framer-motion";
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

export default function Navbar({ shouldAnimate }) {
  let pathname = usePathname() || '/';

  if (!shouldAnimate) {
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
                  console.log(isActive)
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
  else {
    return(
      <div className="mainNav">

        <div className="homeBar">
          
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
            }}>

              <Link
                href={'/'}>
                ab
              </Link>

          </motion.div>

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
            className="md:hidden">

              <SocialIcon network="email" fgColor="gray" bgColor="transparent" style={{ height: 70, width: 70 }}/>

          </motion.div>

        </div>

        <div className="subNav">

          {Object.entries(navItems).map(([path, { name }]) => {
                const isActive = path === pathname;
                console.log(isActive)
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
          {/* Old Stuff
          <Link href={'/about'} className='px-4 hover:text-white active:text-white'>
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
          className="mailToggle">

          <SocialIcon network="email" fgColor="gray" bgColor="transparent" style={{ height: 90, width: 90 }}/>

        </motion.div>

      </div>
    );
  }
}