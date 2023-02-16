import React from 'react';

type Props = {
  course: string;
  date: string;
  institution: string;
};

const Education = ({ course, date, institution }: Props) => {
  return (
    <div className="bg-background gap-2 text-white rounded p-5 flex flex-col items-start justify-start max-w-[300px] laptop:max-w-[380px] ">
      <h1>{course}</h1>
      <span>{date}</span>
      <span>{institution}</span>
    </div>
  );
};

export default Education;
