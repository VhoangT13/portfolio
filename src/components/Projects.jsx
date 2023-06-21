import project from "../data/project";
import PortfolioItem from "./PortfolioItem";

const Projects = () => {
  return (
    <section id="project" className="container px-6 py-20 mx-auto mb-20">
      <h2 className="mb-10 dark:text-stone-300 text-4xl text-gray-700 lg:text-5xl">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 gap-6 lg:gap-10">
        {project.map((project, index) => (
          <PortfolioItem
            key={index}
            title={project.title}
            imageUrl={project.imgUrl}
            description={project.description}
            stack={project.stack}
            link={project.link}
            sourceCode={project.sourceCode}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
