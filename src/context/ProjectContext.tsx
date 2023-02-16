import React, { createContext, useContext, useState } from 'react';

export interface IProject {
  repositoryName: string;
  repositoryUrl: string;
  hostingUrl: string;
  imageUrl: string;
  description: string;
  usedTechs: string[];
}

type ProjectContextProps = {
  children: React.ReactNode;
};

type ProjectContextType = {
  isModalOpen: boolean;
  setIsModalOpen: (state: boolean) => void;
  project: IProject | undefined;
  setProject: (project: IProject) => void;
  handleOk?: () => void;
  handleCancel?: () => void;
  showModal?: () => void;
};

const initialValue = {
  isModalOpen: false,
  setIsModalOpen: () => {},
  project: {
    repositoryName: '',
    repositoryUrl: '',
    hostingUrl: '',
    imageUrl: '',
    description: '',
    usedTechs: [],
  },
  setProject: () => {},
};

export const ProjectContext = createContext<ProjectContextType>(initialValue);

export const ProjectContextProvider = ({ children }: ProjectContextProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [project, setProject] = useState<IProject>();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    console.log('modal fechando com OK: ' + isModalOpen);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    console.log('modal fechando com cancel: ' + isModalOpen);
  };

  console.log(isModalOpen);

  return (
    <ProjectContext.Provider
      value={{
        isModalOpen,
        setIsModalOpen,
        project,
        setProject,
        handleOk,
        handleCancel,
        showModal,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjectContextProvider = () => {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error('Error in context');
  }

  return context;
};
