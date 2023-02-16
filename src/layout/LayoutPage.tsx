import { Layout } from 'antd';
import { Drawer } from '../components/Drawer';
import { SIDEBAR_OPTIONS } from '../common/Config';
import { Link } from 'react-router-dom';
import { Avatar } from '../components/Avatar';
import {
  GithubOutlined,
  HomeOutlined,
  LinkedinOutlined,
  MailOutlined,
  PhoneOutlined,
  TwitterOutlined,
} from '@ant-design/icons';
import { useState } from 'react';
import { SocialMedia } from '../components/SocialMedia';

const { Sider, Content } = Layout;

type PropsLayout = {
  children: React.ReactNode;
};

const handleClick = () => {};

export const LayoutPage = ({ children }: PropsLayout) => {
  const [theme, setTheme] = useState();
  return (
    <Layout>
      <Layout>
        <Sider className="bg-background hidden laptop:flex laptop:justify-center laptop:items-center laptop:text-white">
          <div className="flex flex-col h-full gap-5 items-center justify-center w-full py-4">
            <Avatar />

            <div>
              <span className="text-center text-white text-2xl font-bold">
                Pedro Henrique
              </span>
            </div>

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

            {SIDEBAR_OPTIONS.map((option, index) => {
              return (
                <Link
                  to={option.path}
                  className="w-[150px] text-center text-base py-2 rounded-full bg-white text-black  font-medium focus:bg-mainColor hover:bg-mainColor hover:text-white focus:text-white"
                  key={index}
                >
                  {option.label}
                </Link>
              );
            })}
          </div>
        </Sider>
        <Drawer className="block bg-background laptop:hidden" />
        <Content className="bg-background min-h-[100vh] flex items-center justify-center">
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
