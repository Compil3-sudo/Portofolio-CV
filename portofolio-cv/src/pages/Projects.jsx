import ProjectCard from "../components/projects/ProjectCard";
import projectsList from "../components/projects/projectsList";
import classes from "./Projects.module.css";

const Projects = () => {
  return (
    <>
      <div className="container mx-auto px-16 mt-24">
        <h1 className="text-center">Projects</h1>

        <div className={classes.projectsContainer}>
          {projectsList.map((project) => (
            <div key={project.title} className={classes.projectsItems}>
              <ProjectCard
                imgSource={project.imgSource}
                title={project.title}
                text={project.text}
                github={project.github}
                live={project.live}
                details={project.details}
                tags={project.tags}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
