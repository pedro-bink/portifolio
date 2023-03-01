import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import Particle from '../components/BgEffect';

type Props = {};

export const Home = (props: Props) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-white relative">
      <img
        src="/bg-programador.jpg"
        className="w-full h-full object-cover opacity-70"
        alt=""
      />
      <div className="bg-gradient-to-t from-black absolute object-cover h-full w-full opacity-90"></div>
      <div className="text-white flex flex-col items-center gap-2 absolute">
        <span className="text-2xl tablet:text-5xl">OLÁ, EU SOU O</span>
        <h1 className="text-2xl tablet:text-5xl">PEDRO HENRIQUE</h1>
        <TypeAnimation
          className="text-base font-bold tablet:text-4xl"
          sequence={[
            '< DESENVOLVEDOR FULLSTACK />',
            2000,
            '< ANALISTA DE SISTEMAS </>',
            2000,
          ]}
          wrapper="div"
          repeat={Infinity}
          speed={15}
        />
      </div>
    </div>
  );
};
