import '@/styles/globals.css'
import '@/styles/Navbar.css'
import { useState } from 'react';
import { AnimatePresence, motion } from "framer-motion";
import { splashVariants } from '@/lib/framerVariants'
import SplashScreen from '@/components/SplashScreen'
import { usePathname } from 'next/navigation';

export default function App({ Component, pageProps }) {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const [introRun, setIntroRun] = useState(false);

  return (
    <div className="bg-background text-pText h-screen overflow-x-hidden">

      <AnimatePresence mode='wait'>
        {!introRun && isHome ? (
          <motion.div
          variants={splashVariants.heroContainer}
          animate={"animate"}
          initial={"initial"}
          exit={"exit"}
          key={"Intro"}
          >
            <SplashScreen runComplete={(val) => setIntroRun(val)} />
          </motion.div>
          ) : (
            <Component {...pageProps} />
          )
        }
      </AnimatePresence>
      
    </div>
  );
}


