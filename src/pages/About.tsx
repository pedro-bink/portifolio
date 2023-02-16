import React from 'react';

type Props = {};

export const About = (props: Props) => {
  return (
    <div className="flex bg-white flex-col w-full h-full items-center justify-center">
      <h1 className="text-2xl py-3 text-center w-full text-mainColor">Sobre</h1>
      <hr className="w-[80%]" />
      <div className="p-3">
        <h1>Quem sou?</h1>
        <p>Me chamo Pedro Henrique, mais conhecido como o lendário Bink</p>
      </div>
    </div>
  );
};
