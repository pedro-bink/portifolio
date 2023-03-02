import { Button } from 'antd';
import { useProjectContextProvider } from '../context/ProjectContext';

const ButtonsComponent = () => {
  const { project } = useProjectContextProvider();
  return (
    <div className="p-1 gap-2 flex">
      <a
        href={project?.hostingUrl}
        target="blank"
        className="max-w-[150px] w-full"
      >
        <Button
          className={`text-sm text-white  bg-gradient-to-r from-cyan-500 to-blue-500 font-semibold justify-center p-1 w-full items-center hover:animate-pulse btnRepository-${project?.repositoryName}`}
          type="primary"
          disabled={project?.hostingUrl ? false : true}
        >
          Acessar projeto
        </Button>
      </a>

      <a
        href={project?.repositoryUrl}
        target="blank"
        className="max-w-[150px] w-full"
      >
        <Button
          className={`bg-gradient-to-r from-cyan-500 to-blue-500 text-sm font-semibold text-white justify-center p-1 w-full items-center hover:animate-pulse btnFonte-${project?.repositoryName}`}
          disabled={project?.repositoryUrl ? false : true}
          type="primary"
        >
          Acessar repositório
        </Button>
      </a>
    </div>
  );
};

export default ButtonsComponent;
