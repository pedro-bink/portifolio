import { Avatar as AvatarAntd } from 'antd';
import React from 'react';

export const Avatar: React.FC = () => (
  <div className="w-full flex ">
    <AvatarAntd
      size={120}
      className="mx-auto border-2 border-white"
      src={'/fuher_baiano.jpg'}
    />
  </div>
);
