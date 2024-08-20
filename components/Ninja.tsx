import { motion } from "framer-motion";

const Ninja = () => {
  return (
    <motion.svg
      version="1.2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 400"
      className="fixed -bottom-[25rem] -left-[14rem] fill-none stroke-primary stroke-[3] w-[45rem] h-[45rem] hidden xl:block"
    >
      <motion.path
        initial={{ opacity: 0, pathLength: 0 }}
        animate={{
          opacity: 1,
          pathLength: 1,
          transition: {
            pathLength: { delay: 0.9, type: "spring", duration: 7 },
            ease: "easeInOut",
            duration: 2,
          },
        }}
        d="m163 146c-10.1-7.8-14.2-20.2-10.9-30.4q-0.5 0-1.1 0.1c-4.7 0.3-9.3-2.1-12.1-3.9-1.5-1-1.9-2.9-0.8-4 2-2.1 5.6-5 10.3-5.3 1.7-0.1 3.4 0.1 5.1 0.6-0.9-1.5-1.6-3.1-1.9-4.8-0.9-4.5 1-8.8 2.5-11.2 0.8-1.4 2.7-1.5 4.1-0.3 2.4 2.2 5.9 6.1 6.8 10.7 0.3 1.4 0.3 2.8 0.2 4.1 8.6-3.5 19.6-2 28.3 4.8 12.5 9.6 15.8 26.3 7.4 37.3-8.4 10.9-25.4 11.9-37.9 2.3zm-66.6 4.5c9.9-12.8 28.1-15.9 44.1-8.6 1.2 0.6 2 1.8 2.1 3.1l1.1 21.4c0.1 2.2 2.4 3.9 4.5 3.5l21-4.4c1.2-0.3 2.6 0.2 3.5 1.3 11.1 13.5 12.8 31.9 2.9 44.7-2 2.6-5.9 2.8-8.8 0.6l-68.7-53c-2.9-2.2-3.6-6.1-1.7-8.6zm74.4-38c-1.6-1.2-3.7-1-4.8 0.3-1 1.4-0.6 3.5 1 4.7l22.6 17.4c1.5 1.2 3.7 1.1 4.7-0.3 1.1-1.3 0.7-3.4-0.9-4.6z"
      />
    </motion.svg>
  );
};

export default Ninja;
