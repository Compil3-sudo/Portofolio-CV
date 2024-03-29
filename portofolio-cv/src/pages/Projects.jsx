import ProjectCard from "../components/projects/ProjectCard";
import projectsList from "../components/projects/projectsList";
import classes from "./Projects.module.css";

const Projects = () => {
  return (
    <>
      <h1>Projects</h1>

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
    </>
  );
};

export default Projects;
