import { FunctionComponent, useState } from 'react';
import { Button, Drawer as DrawerAntd } from 'antd';
import { SIDEBAR_OPTIONS } from '../common/Config';
import {
  CloseOutlined,
  GithubOutlined,
  LinkedinOutlined,
  MenuOutlined,
  TwitterOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Avatar } from './Avatar';
import { SocialMedia } from './SocialMedia';

interface DrawerProps extends Partial<Pick<HTMLDivElement, 'className'>> {}

export const Drawer: FunctionComponent<DrawerProps> = ({ className }) => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className={className}>
      <div className="p-4 border-2 cursor-pointer" onClick={showDrawer}>
        <MenuOutlined
          style={{ color: 'white', fontWeight: '700' }}
          height={80}
          width={80}
        />
      </div>

      <DrawerAntd
        placement="left"
        onClose={onClose}
        open={open}
        className="text-center bg-background "
        width={200}
        closeIcon={
          <CloseOutlined
            style={{
              fontSize: '1.5rem',
              color: 'white',
            }}
          />
        }
      >
        <div className="flex flex-col gap-4 w-full h-full justify-center items-center">
          <Avatar />
          <div>
            <span className="text-center text-mainColor text-2xl font-bold">
              Pedro Henrique
            </span>
            <p className="text-center text-base text-white font-medium">
              Desenvolvedor fullstack
            </p>
            <div className="flex items-center justify-center gap-4">
              <SocialMedia
                component={<GithubOutlined />}
                url="https://github.com/pedro-bink"
              />
              <SocialMedia
                component={<LinkedinOutlined />}
                url="https://www.linkedin.com/in/pedro-bink"
              />
              <SocialMedia
                component={<TwitterOutlined />}
                url="https://twitter.com/pedro_bink"
              />
            </div>
          </div>
          {SIDEBAR_OPTIONS.map((option, index) => {
            return (
              <Link
                className="w-[120px] text-center text-base py-2 rounded-full bg-white text-black font-medium hover:bg-mainColor hover:text-white"
                to={option.path}
                key={index}
                onClick={onClose}
              >
                {option.label}
              </Link>
            );
          })}
        </div>
      </DrawerAntd>
    </div>
  );
};
