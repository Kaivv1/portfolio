"use client";
import { motion } from "framer-motion";

const variants = {
  initial: {
    x: "100%",
    width: "100%",
  },
  animate: {
    x: "0%",
    width: "0%",
  },
  exit: {
    x: ["0%", "100%"],
    width: ["0%", "100%"],
  },
};

const TransitionAnimation = () => {
  return (
    <>
      <motion.div
        id="layer-1"
        className="fixed top-0 bottom-0 right-full h-screen w-screen bg-muted z-30"
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.1, duration: 0.6, ease: "easeIn" }}
      />
      {/* <motion.div
        id="layer-2"
        className="fixed top-0 bottom-0 right-full h-screen w-screen bg-primary-hover z-20"
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.2, duration: 0.6, ease: "easeIn" }}
      />
      <motion.div
        id="layer-3"
        className="fixed top-0 bottom-0 right-full h-screen w-screen bg-primary z-10"
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.3, duration: 0.6, ease: "easeIn" }}
      /> */}
    </>
  );
};

export default TransitionAnimation;
