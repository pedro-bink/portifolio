import { Avatar as AvatarAntd } from 'antd';
import React from 'react';

type AvatarProps = {
  size: number;
};

export const Avatar = ({ size }: AvatarProps) => (
  <div className="w-full flex ">
    <AvatarAntd
      size={size}
      className="mx-auto border-2 border-white"
      src={'/pedro.jpeg'}
    />
  </div>
);
