import LeftBracket from "@/components/LeftBracket";
import RightBracket from "@/components/RightBracket";
import Heading from "@/typography/Heading";
import { motion } from "framer-motion";

const ObjectSection = () => {
  return (
    <motion.section
      initial={{
        opacity: 0,
        x: 50,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.8,
        delay: 0.4,
      }}
    >
      <Heading variant="h3" className="relative">
        <span>
          const <span className="text-primary"> Developer </span> = {"{"}
        </span>
        <br />
        <span className="text-primary pl-2 sm:pl-4 text-base sm:text-lg lg:text-xl xl:text-2xl">
          id:
          <span className="text-white"> 1,</span>
        </span>
        <br />
        <span className="text-primary pl-2 sm:pl-4 text-base sm:text-lg lg:text-xl xl:text-2xl">
          name: <span className="text-white">"Kaloyan Vulchev",</span>
        </span>
        <br />
        <span className="text-primary text-base pl-2 sm:pl-4 sm:text-lg lg:text-xl xl:text-2xl">
          location: <span className="text-white">"Varna, Bulgaria",</span>
        </span>
        <br />
        <span className="text-primary pl-2 sm:pl-4 text-base sm:text-lg lg:text-xl xl:text-2xl">
          birthday: <span className="text-white">"04 June 1999",</span>
        </span>
        <br />
        <span className="text-primary pl-2 sm:pl-4 text-base sm:text-lg lg:text-xl xl:text-2xl">
          age: <span className="text-white">25</span>
        </span>
        <br />
        {"}"};
      </Heading>
    </motion.section>
  );
};

export default ObjectSection;
