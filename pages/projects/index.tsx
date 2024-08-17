import ProjectsList from "@/components/ProjectsList";
import Heading from "@/typography/Heading";
import Paragraph from "@/typography/Paragraph";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <main className="space-y-12">
      <div className="space-y-3 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
          }}
        >
          <Heading variant="h2">
            What I've built until now<span className="text-primary">.</span>
          </Heading>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.5,
          }}
        >
          <Paragraph variant="sm">
            Currently I am learning some Golang with Postgresql and how to use
            Docker, so I will be building something cool with that soon.
          </Paragraph>
        </motion.div>
      </div>
      <ProjectsList />
    </main>
  );
};

export default Projects;
