import { useState } from 'react';
import { Menu, MenuProps, Row, Col, Space } from 'antd';
import { useNavigate } from "react-router-dom";
import './header.module.scss'
import logo from '../assets/img/logo.svg'
import ChangeTheme from './changeTheme'

function HeaderContent() {
  const navigate = useNavigate();
  const items: MenuProps['items'] = [
    {
      'label': 'home',
      'key': '/home',
    },
    {
      'label': 'article',
      'key': '/article',
    },
    {
      'label': 'about',
      'key': '/about',
    },
  ]
  const [current, setCurrent] = useState('mail');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
    navigate(e.key);
  };

  return (
    <div className="header-box">
      <Row gutter={16} align="middle">
        <Col span={'auto'}><img src={logo} /></Col>
        <Col span={19}><Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} /></Col>
        <Col span={'auto'}>
          <ChangeTheme/>
        </Col>
      </Row>
    </div>
  );
}

export default HeaderContent;
