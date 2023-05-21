export const splashVariants = {

    quoteContainer: {
      initial: {},
      animate: {
        transition: {
          staggerChildren: 0.2,
          delayChildren: 1,
        },
      },
    },
    span: {
      initial: {
        y: 100,
      },
      animate: {
        y: 0,
        transition: {
          ease: [0.76, 0, 0.24, 1],
          duration: 1,
        },
      },
      exit: {
        y: -100,
        transition: {
          ease: [0.76, 0, 0.24, 1],
          duration: 1,
        },
      },
    },
    heroContainer: {
      initial: {},
      animate: {},
      exit: {
        y: "-100vh",
        transition: {
          ease: [0.76, 0, 0.24, 1],
          duration: 1,
          delay: 0.25,
        },
      },
    },
    
};