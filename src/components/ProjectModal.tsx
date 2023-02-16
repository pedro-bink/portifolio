import binkchique from '../assets/binkchique.jpg';
import { Button, Modal } from 'antd';
import { PropsRepositoryCard } from './ProjectCard';
import { useState } from 'react';
import { useProjectContextProvider } from '../context/ProjectContext';
import ButtonsComponent from './ButtonsComponent';
import { CloseOutlined } from '@ant-design/icons';

// type ProjectModalProps = {
//   isModalOpen: boolean;
//   setIsModalOpen: (value: boolean) => void;
//   project: PropsRepositoryCard | undefined;
// };

const ProjectModal = () => {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const { project, isModalOpen, handleCancel } = useProjectContextProvider();
  console.log(project?.usedTechs);
  return (
    <Modal
      open={isModalOpen}
      onCancel={handleCancel}
      className="mx-auto max-w-[900px] max-h-[600px] h-full w-full p-3"
      footer={null}
      closeIcon={<CloseOutlined className="text-mainColor text-2xl" />}
    >
      <div className="flex flex-col items-center gap-3 p-2 rounded ">
        <div className="flex flex-col items-center justify-center gap-2 p-1  w-full tablet:flex-row">
          <div className="w-[50%] flex flex-col items-center">
            <img
              src={binkchique}
              alt="project_image"
              className="h-full w-full max-w-[300px] hidden tablet:flex "
            />

            <div className="hidden tablet:flex">
              <ButtonsComponent />
            </div>
          </div>

          <div className="w-[100%] flex flex-col items-center tablet:w-[50%] ">
            <div className="w-full h-full flex flex-col gap-3 items-center p-2">
              <h1 className="text-3xl font-bold text-mainColor">
                {project?.repositoryName}
              </h1>
              <h3>Descrição do projeto</h3>
              <p className="p-3 text-center">{project?.description}</p>
              <h3>Tecnologias utilizadas</h3>
              <div className="grid grid-cols-3 grid-rows-3 gap-3 max-w-[120px] w-full items-center justify-center">
                {project?.usedTechs.map((tech, index) => {
                  return <img className=" rounded-xl" src={tech} key={index} />;
                })}
              </div>
            </div>
            <div className="tablet:hidden">
              <ButtonsComponent />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProjectModal;
