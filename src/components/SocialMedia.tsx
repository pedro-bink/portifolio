import React from 'react';

type Props = {
  component: any;
  url?: string;
};

export const SocialMedia = ({ component, url }: Props) => {
  return (
    <a
      href={url}
      className="hover:text-mainColor text-2xl text-white tablet:text-4xl"
    >
      {component}
    </a>
  );
};
