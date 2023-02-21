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
  handleOk: () => void;
  handleCancel: () => void;
  showModal: () => void;
};

export const ProjectContext = createContext({} as ProjectContextType);

export const ProjectContextProvider = ({ children }: ProjectContextProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [project, setProject] = useState<IProject>();

  const showModal = () => {
    return setIsModalOpen(true);
  };

  const handleOk = () => {
    return setIsModalOpen(false);
  };

  const handleCancel = () => {
    return setIsModalOpen(false);
  };

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
