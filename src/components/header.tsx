import { useState } from 'react';
import { Menu, MenuProps, Row, Col } from 'antd';
import { useNavigate } from "react-router-dom";
import './header.module.less'
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
    setCurrent(e.key);
    navigate(e.key);
  };

  return (
    <div className="header-box">
      <Row justify={'space-between'} className='max-1400' gutter={16} align="middle">
        <Col span={'auto'}><a href='/'><img src={logo} /></a></Col>
        <Col span={19}><Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} /></Col>
        <Col span={'auto'}>
          <ChangeTheme/>
        </Col>
      </Row>
    </div>
  );
}

export default HeaderContent;
