import React from 'react';

type Props = {
  date: string;
  company: string;
  position: string;
  tasks: string[];
};

const ProfessionalExperience = ({ date, company, position, tasks }: Props) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-start gap-1">
        <p className=" text-xl font-bold">{position} </p>
        <span className="font-bold"> - </span>
        <span className="bg-[#e4edf9;] p-2 text-center text-black font-semibold rounded max-w-[150px">
          {date}
        </span>
      </div>

      <p className="text-lg font-semibold">{company}</p>

      <ul className="flex flex-col text-base gap-3 pl-[20px]">
        {tasks.map((task, index) => (
          <li className="marker:text-black" key={index}>
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfessionalExperience;
