import { projects } from "@/data/projects";
import ProjectBox from "./ProjectBox";

const ProjectsList = () => {
  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
      {projects.map((project, i) => {
        return <ProjectBox project={project} key={i} index={i + 1} />;
      })}
    </div>
  );
};

export default ProjectsList;
