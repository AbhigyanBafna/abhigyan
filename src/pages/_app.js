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
  let title = metadata.title.default
  
  if(!isHome){
    var secondChar = pathname?.charAt(1).toUpperCase();
    title = secondChar + pathname?.slice(2) + ' | ' + title;
  }

  return (
    <>
    <Head>
      <title>{`${title}`}</title>
    </Head>
    <div className="bg-background text-pText h-screen overflow-x-hidden">

      <AnimatePresence mode='wait'>
        {/* !introRun && isHome */}
        {false ? (
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


