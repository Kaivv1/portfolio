import Heading from "@/typography/Heading";
import { motion } from "framer-motion";

const CreateTableSection = () => {
  return (
    <motion.section
      className="hidden sm:block"
      initial={{
        opacity: 0,
        x: -50,
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
      <Heading variant="h3">
        <span>
          CREATE TABLE <span className="text-primary">developers</span>
        </span>
        (
        <br />
        <span className="pl-4 text-primary">id</span>{" "}
        <span>SERIAL PRIMARY KEY</span>,
        <br />
        <span className="pl-4 text-primary">name</span>{" "}
        <span>TEXT NOT NULL</span>,
        <br />
        <span className="pl-4 text-primary">location</span>{" "}
        <span>TEXT NOT NULL</span>,
        <br />
        <span className="pl-4 text-primary">birthday</span>{" "}
        <span>DATE NOT NULL</span>,
        <br />
        <span className="pl-4 text-primary">age</span>{" "}
        <span>INTEGER NOT NULL</span>
        <br />
        );
      </Heading>
    </motion.section>
  );
};

export default CreateTableSection;
