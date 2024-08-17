import { skills } from "@/data/skills";
import Heading from "@/typography/Heading";
import { motion } from "framer-motion";

export function getDelay(num: number) {
  if (num >= 10) {
    return 1 + (num - 10) * 0.1;
  } else {
    return num * 0.1;
  }
}

const SkillsSection = () => {
  return (
    <section>
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
          My arsenal
          <span className="text-primary">.</span>
        </Heading>
      </motion.div>
      <motion.div className="grid sm:grid-cols-[repeat(7,auto)] grid-cols-[repeat(4,auto)] justify-center items-center gap-4">
        {skills.map((skill) => {
          return (
            <motion.div
              key={skill.id}
              className="w-fit"
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: getDelay(skill.id),
              }}
            >
              <skill.icon className="size-10 md:size-16 fill-primary-hover" />
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default SkillsSection;
