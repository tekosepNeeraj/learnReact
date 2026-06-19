import { projects } from "../../data/projects";

const Projects = () => {
  return (
    <section>

      <h2>
        Projects
      </h2>

      {
        projects.map(project => (
          <div key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.stack}</p>
          </div>
        ))
      }

    </section>
  );
};

export default Projects;