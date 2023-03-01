import React from 'react';
import { Avatar } from '../components/Avatar';

type Props = {};

export const About = (props: Props) => {
  return (
    <div className="flex bg-white flex-col w-full h-full items-center justify-center">
      <h1 className="text-2xl py-3 text-center w-full text-mainColor">Sobre</h1>
      <hr className="w-[80%]" />
      <div className="p-5 min-h-[80vh] h-full flex flex-col items-center gap-10 bg-background m-2 rounded text-white tablet:justify overflow-scroll">
        <h1 className="tablet:text-4xl">Quem sou?</h1>
        <div className="hover:scale-110">
          <Avatar size={180} />
        </div>

        <p className="text-base tablet:text-2xl max-w-[600px]">
          Me chamo Pedro Henrique, moro em Pirapora-MG. Sou estudante de
          Sistemas de informação, pelo IFNMG. Além disso sou desenvolvedor
          fullstack, possuo conhecimentos em React, NodeJS, C#, Typescript, REST
          Api, Javascript, HTML, CSS, SQL, entre outras tecnologias. Atualmente
          estou estudando e desenvolvendo projetos web que visam ampliar meus
          conhecimentos e aprimorar minhas habilidades.
        </p>
      </div>
    </div>
  );
};
