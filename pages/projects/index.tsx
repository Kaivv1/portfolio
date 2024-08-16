import { projects } from "@/data/projects";
import Project from "./Project";

const Projects = () => {
  return (
    <main>
      <div className="grid grid-cols-2 gap-10">
        {projects.map((project) => (
          <Project project={project} />
        ))}
      </div>
    </main>
  );
};

export default Projects;
