import React from "react";
import { motion } from "framer-motion";
import { splashVariants } from '@/lib/framerVariants'

export default function SplashScreen( { runComplete } ) {

  return(
    <motion.div className="h-screen text-3xl md:text-5xl flex items-center mx-auto text-center justify-center w-full">
      
      <div>

        <motion.div
          className="inline-block overflow-hidden m-0 h-[50px]"
          variants={splashVariants.quoteContainer}
          initial={"initial"}
          animate={"animate"}
          exit={"exit"}
          key={"text"}
          onAnimationComplete ={ () => {
            setTimeout(()=>{
              runComplete(true)
            }, 200)}
          }
        >

          <motion.span className="inline-block overflow-hidden m-0 h-[100px] uppercase" variants={splashVariants.span}>
              Enjoy&nbsp;
          </motion.span>

          <motion.span className="inline-block overflow-hidden m-0 h-[100px] uppercase" variants={splashVariants.span}>
              your&nbsp;
          </motion.span>

          <motion.span className="inline-block overflow-hidden m-0 h-[100px] uppercase" variants={splashVariants.span}>
              journey&nbsp;
          </motion.span>

        </motion.div>

        <motion.div
          className="inline-block overflow-hidden m-0 h-[50px]"
          variants={splashVariants.quoteContainer}
          initial={"initial"}
          animate={"animate"}
          exit={"exit"}
        >
          
          <motion.span 
            className="inline-block overflow-hidden m-0 h-[100px] uppercase text-pHighlight">
              abhi&nbsp;
          </motion.span> 

        </motion.div>

      </div>

    </motion.div>
  )
}