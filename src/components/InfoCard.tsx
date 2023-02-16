import React from 'react';

type InfoCardProps = {
  component: any;
  label: string;
  text: string;
};

const InfoCard = ({ component, label, text }: InfoCardProps) => {
  return (
    <div className="flex gap-2 hover:text-mainColor">
      <div className="p-1 flex items-center">{component}</div>
      <div className="flex flex-col gap-1">
        <h2 className="text-xl">{label}</h2>
        <p className="text-base">{text}</p>
      </div>
    </div>
  );
};

export default InfoCard;
