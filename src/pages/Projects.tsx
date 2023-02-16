import { ProjectCard } from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import projects from '../data/Projects';

export const Projects = () => {
  return (
    <div className="bg-white text-black flex gap-1 flex-col w-full h-full items-center p-2 tablet:h-full max-h-screen">
      <h1 className="text-2xl py-3 text-center w-full text-mainColor">
        Projetos
      </h1>
      <hr className="w-[80%]" />

      <div className="flex items-center justify-center flex-wrap p-2 gap-3  w-full h-full overflow-scroll">
        {projects.map((project, index) => {
          return (
            <ProjectCard
              key={index}
              repositoryName={project.repositoryName}
              repositoryUrl={project.repositoryUrl}
              hostingUrl={project.hostingUrl}
              imageUrl={project.imageUrl}
              description={project.description}
              usedTechs={project.usedTechs}
            />
          );
        })}
      </div>
      <ProjectModal />
    </div>
  );
};
