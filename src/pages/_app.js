import '@/styles/globals.css'
import '@/styles/Navbar.css'
import { useState } from 'react';
import { AnimatePresence, motion } from "framer-motion";
import { splashVariants } from '@/lib/framerVariants'
import SplashScreen from '@/components/SplashScreen'
import { usePathname } from 'next/navigation';
import Head  from 'next/head'
import { metadata } from '@/lib/info'

//Renders an Intro Animation when loading the website for the first time.
export default function App({ Component, pageProps }) {
  
  const pathname = usePathname()
  const isHome = pathname === '/'
  const [introRun, setIntroRun] = useState(false);

  return (
    <>
    <Head>
      <title>{metadata.title.default}</title>
    </Head>
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
    </>
  );
}


