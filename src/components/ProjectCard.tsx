import { useProjectContextProvider } from '../context/ProjectContext';

export type PropsRepositoryCard = {
  repositoryName: string;
  repositoryUrl: string;
  hostingUrl: string;
  imageUrl: string;
  description: string;
  usedTechs: string[];
};

export const ProjectCard = ({
  repositoryName,
  repositoryUrl,
  hostingUrl,
  imageUrl,
  description,
  usedTechs,
}: PropsRepositoryCard) => {
  const { setProject, showModal } = useProjectContextProvider();
  const handleClick = () => {
    const project = {
      repositoryName,
      repositoryUrl,
      hostingUrl,
      imageUrl,
      description,
      usedTechs,
    };
    setProject(project);
    showModal();
  };

  return (
    <div
      onClick={handleClick}
      className="project-card relative shadow-2xl p-1 flex flex-col items-center justify-center max-w-[100%] w-full max-h-[45%] h-full tablet:max-w-[30%] transition-all duration-300 transform hover:scale-105 hover:mx-3"
    >
      <div className="w-full h-full">
        <img className="w-full h-full object-cover" src={imageUrl} />
        <div className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-base laptop:text-xl">{repositoryName}</h1>
        </div>
      </div>
    </div>
  );
};
