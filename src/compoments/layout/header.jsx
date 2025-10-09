import React, { useState } from 'react';
import {
  HomeOutlined,UserOutlined,SettingOutlined,LoginOutlined,LogoutOutlined,} from '@ant-design/icons';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const Header = () => {
  const [current, setCurrent] = useState('home');

  const items = [
    {
      label: <Link to ={"/"}>Home Page</Link>,
      key: 'home',
      icon: <HomeOutlined />,
    },
    {
      label: <Link to ={"/user"}>Users</Link>,
      key: 'user',
      icon: <UserOutlined />,
    },
    {
      label: 'Welcome',
      key: 'SubMenu',
      icon: <SettingOutlined />,
      children: [
        {
          type: 'group',
          label: 'Tài khoản',
          children: [
            {
              label: 'Đăng nhập',
              key: 'login',
              icon: <LoginOutlined />,
            },
            {
              label: 'Đăng xuất',
              key: 'logout',
              icon: <LogoutOutlined />,
            },
          ],
        },
      ],
    },
  ];

  const handleClick = (e) => {
    console.log('click menu:', e);
    setCurrent(e.key);
  };

  return (
    <Menu
      onClick={handleClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};

export default Header;
