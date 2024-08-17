import { motion } from "framer-motion";

const Peace = () => {
  return (
    <motion.svg
      version="1.2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      width="200"
      height="200"
      className="fill-none stroke-[3] size-96 stroke-primary -bottom-32 -left-32 bg-fixed fixed -z-10 hidden xl:block"
    >
      <motion.path
        initial={{
          opacity: 0,
          pathLength: 0,
        }}
        animate={{
          opacity: 1,
          pathLength: 1,
          transition: {
            pathLength: { delay: 0.9, type: "spring", duration: 7 },
            ease: "easeInOut",
            duration: 2,
          },
        }}
        id="Shape 5"
        fillRule="evenodd"
        className=""
        d="m128 64.1l-32 25 9.3 12 32.1-25c2.7-2.1 2.8-6.5 0.2-9.9-2.6-3.3-6.9-4.2-9.6-2.1zm-10.6 37.2l-9.9 7.7c-2.7 2.1-2.8 6.5-0.2 9.8 2.6 3.4 6.9 4.3 9.6 2.2l9.9-7.7c2.7-2.1 2.8-6.5 0.2-9.8-2.6-3.4-6.9-4.3-9.6-2.2zm-0.7 29.5c-2.8 2.2-2.9 6.6-0.3 9.9 2.6 3.3 6.9 4.3 9.6 2.2l9.9-7.7c2.7-2.2 2.8-6.6 0.2-9.9-2.6-3.3-6.9-4.3-9.6-2.1zm-9.7-92.9c-3.4-2.2-7.4-1.3-8.9 2l-14.7 33 10.3 13.1 16.9-38.2c1.5-3.3-0.1-7.7-3.6-9.9zm-44.5 38.6l-4.2 3.3c-5.2 4-8.2 10.5-8.4 17.9l-0.1 3.6c-0.2 9.2 3.1 18.8 9.4 26.8l9 11.6c12.9 16.5 34.4 21.4 48 10.8l1.4-1.1c-2.3-1.1-4.3-2.8-6.1-4.9-4-5.3-4.8-11.9-2.2-16.5-2.5-1.1-4.9-2.9-6.9-5.4-1.7-2.2-2.8-4.6-3.3-7h-0.1c-6.1 4.8-15.8 2.7-21.6-4.8l-8.2-10.5c-1.3-1.7-1.3-3.9 0.1-4.9 1.3-1.1 3.5-0.6 4.8 1l8.2 10.5c3.2 4.2 8.6 5.4 12 2.7 3.4-2.6 3.5-8.1 0.3-12.3l-14-18-0.1 0.1c-5.2-5.4-13-6.8-18-2.9z"
      />
    </motion.svg>
  );
};

export default Peace;
