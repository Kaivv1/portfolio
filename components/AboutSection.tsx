import Heading from "@/typography/Heading";
import Paragraph from "@/typography/Paragraph";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section>
      <div className="max-w-[50rem]">
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.1,
          }}
        >
          <Heading variant="h2" className="mb-5 text-center">
            Little about me<span className="text-primary">.</span>
          </Heading>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.2,
          }}
        >
          <Paragraph variant="sm" className="text-center">
            For the past year and a half, I've been navigating the web
            development landscape, driven by a passion for both frontend design
            and backend development. I began with a bootcamp that provided me
            with the fundamentals and have since continued my quest with a
            self-guided adventure. Picture me as a curious explorer that is
            constantly learning, experimenting with new techniques, and
            occasionally managing a coffee spill disaster in the midst of
            debugging.
          </Paragraph>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
