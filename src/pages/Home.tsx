import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import Particle from '../components/BgEffect';

type Props = {};

export const Home = (props: Props) => {
  return (
    <div className="text-black p-2 flex flex-col w-full h-full items-center justify-center bg-white">
      <Particle/>
      <span>OLÁ, EU SOU O</span>
      <h1 className="text-2xl text-mainColor">PEDRO HENRIQUE</h1>
      <TypeAnimation
        className="text-mainColor font-bold text-xl"
        sequence={[
          'DESENVOLVEDOR FRONT-END',
          2000,
          'DESENVOLVEDOR BACK-END',
          2000,
        ]}
        wrapper="div"
        repeat={Infinity}
        speed={20}
      />
    </div>
  );
};
