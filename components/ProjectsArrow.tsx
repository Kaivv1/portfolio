import { AnimatePresence, motion } from "framer-motion";

const pathVariants = {
  initial: { pathLength: 0, opacity: 0 },
  animate: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { delay: 0.7, type: "spring", duration: 5 },
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const svgVariants = {
  initial: { x: 0 },
  animate: { x: 5 },
  exit: { x: [5, 0] },
};

const ProjectsArrow = ({
  isClicked,
  onEnd,
}: {
  isClicked: boolean;
  onEnd: () => void;
}) => {
  return (
    <AnimatePresence>
      <motion.svg
        version="1.2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        className="stroke-primary-hover fill-transparent stroke-[7] absolute mx-auto my-auto inset-0 size-16 xl:size-20"
        variants={svgVariants}
        initial="initial"
        animate={isClicked && "animate"}
        exit="exit"
        transition={{ duration: 0.2, delay: 0.1 }}
        onAnimationEnd={() => onEnd()}
      >
        <motion.path
          initial="initial"
          animate="animate"
          variants={pathVariants}
          id="Background"
          d="m119.4 141.9c2.2 1 4.8 0.6 6.5-1.2l35.9-35.9c1.2-1.2 1.9-2.8 1.9-4.6 0-1.7-0.7-3.4-1.9-4.6l-35.9-35.9c-1.7-1.7-4.3-2.2-6.5-1.2-2.2 1-3.6 3.3-3.6 5.8v19h-71.8c-4.4 0-8 3.8-8 8.5v16.9c0 4.6 3.6 8.4 8 8.4h71.8v19c0 2.6 1.4 4.8 3.6 5.8z"
        />
      </motion.svg>
    </AnimatePresence>
  );
};

export default ProjectsArrow;
