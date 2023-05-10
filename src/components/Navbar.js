//The one with changing color, border and glassmorphism

import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {

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
            ab
        </motion.div>

        <div className="flex flex-row items-center pl-4 text-4xl text-sText">
            <Link href={'/about'} className="px-4">
              about
            </Link>
            <Link href={'/projects'} className="px-4">
              projects
            </Link>
            <Link href={'/blog'} className="px-4">
              blog
            </Link>
        </div>
        
      {/* Social Icons */}
      {/* <motion.div
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
        className="flex flex-row items-center"
      >
        <SocialIcon
          url="https://twitter.com/Abhigyan_Bafna"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://twitter.com/Abhigyan_Bafna"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://twitter.com/Abhigyan_Bafna"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div> */}

      {/* Get in touch  */}
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

      {/* Spacing Div 2 */}
      {/* <div className="flex-row items-center hidden lg:flex"></div> */}
    </motion.div>
  );
}