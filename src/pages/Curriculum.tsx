import { DownloadOutlined } from '@ant-design/icons';
import Education from '../components/Education';
import ProfessionalExperience from '../components/ProfessionalExperience';
import CV from '../assets/PedroCurriculo.pdf';

const Curriculum = () => {
  return (
    <div className="text-black flex gap-1 flex-col w-full h-full items-center p-2">
      <div className="flex gap-5 items-center justify-center">
        <h1 className="text-2xl py-3 text-center w-full text-mainColor">
          Currículo
        </h1>

        <a href={CV} target="blank">
          <DownloadOutlined />
        </a>
      </div>

      <hr className="w-[80%]" />

      <div className="flex flex-col gap-5 justify-start items-start laptop:flex-row ">
        <div className="laptop:flex-row">
          <h1 className="text-mainColor text-2xl">Sumário</h1>
          <div className="resume_item">
            <div className="flex flex-col gap-2 items-start justify-center">
              <h1>PEDRO HENRIQUE</h1>
              <p className="text-base laptop:full-w-[400px] font-normal">
                Sou apaixonado por tecnologia e considero a programação como uma
                de minhas maiores paixões. Estou sempre buscando novos desafios
                e oportunidades de aprendizado, a fim de melhorar minhas
                habilidades e ampliar meus conhecimentos na área. Estou em busca
                da minha primeira oportunidade profissional como programador,
                ansioso para aplicar meus conhecimentos e dedicação para
                contribuir para o sucesso da empresa que escolher me contratar.
              </p>
              <div className="text-base">
                <p className="text-xl font-semibold">Informações pessoais</p>
                <p>
                  <span className="font-bold">Telefone: </span> (38) 984271999
                </p>
                <p>
                  <span className="font-bold">Email: </span> phdss04@gmail.com
                </p>
                <p>
                  <span className="font-bold">Disponibilidade: </span> Período
                  Integral
                </p>
                <p>
                  <span className="font-bold">Data de nascimento: </span>
                  28/06/2001
                </p>
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-mainColor text-2xl mt-3">Educação</h1>
            <div className="resume_item">
              <Education
                course="Bacharelado em Sistemas de informação"
                date="2020 - 2024"
                institution="Instituto Federal do Norte de Minas Gerais"
              />
            </div>

            <div className="resume_item">
              <Education
                course="Técnico em informática"
                date="Concluído"
                institution="Instituto Federal do Norte de Minas Gerais"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between h-full">
          <h1 className="text-mainColor text-2xl">Experiência Profissional</h1>
          <div className="resume_item">
            <ProfessionalExperience
              date="03/2022 - 05/2022"
              company="Instituto Federal do Norte de Minas Gerais"
              position="ESTAGIÁRIO"
              tasks={['Manutenção de computadores']}
            />
          </div>
          <div className="resume_item">
            <ProfessionalExperience
              date="01/2022 - 04/2022"
              company="Transportes Wamag"
              position="ESTAGIÁRIO"
              tasks={[
                'Auxiliar em todas tarefas relacionadas ao setor de controle e compras',
              ]}
            />
          </div>
          <div className="resume_item">
            <ProfessionalExperience
              date="04/2020 - 10/2020"
              company="Wizard"
              position="PROFESSOR"
              tasks={[
                'Ministrar de aulas de inglês',
                'Preparação de aula',
                'Correção de tarefas',
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
