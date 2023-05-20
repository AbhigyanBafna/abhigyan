import Navbar from "@/components/Navbar";
import SocialLinks from "@/components/SocialLinks";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { splashVariants } from '@/lib/framerVariants'
import SplashScreen from '@/components/SplashScreen'
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const [isLoading, setIsLoading] = useState(true);

  return (
    <html lang="en">
      <body className="bg-background text-pText h-screen overflow-x-hidden">
        <AnimatePresence>
          {isHome && isLoading ? (
            <motion.div
            variants={splashVariants.heroContainer}
            animate={"animate"}
            initial={"initial"}
            exit={"exit"}
            key={"Intro"}
            >
              <SplashScreen setLoading={(val) => setIsLoading(val)} />
            </motion.div>
            ) : (
              <>
                <Navbar />
                {children}
                <SocialLinks />
              </>
            )
          }
        </AnimatePresence>
      </body>
    </html>
  );
}