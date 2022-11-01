import { Container,Grid, Menu, Image, Icon } from 'semantic-ui-react';
import { useNavigate } from "react-router-dom";
import './header.module.scss'
import logo from '../assets/img/logo.svg'
import ChangeTheme from './changeTheme'

function Header() {
  const navigate = useNavigate();
  const menuArray: any = [
    {
      'label': 'home',
      'url': '/home'
    },
    {
      'label': 'article',
      'url': '/dashboard'
    },
    {
      'label': 'about',
      'url': '/about'
    },
  ]
  return (
    <div className="header-box">
      <Container>
        <Grid className='flex-space-between'>
          <Menu secondary>
            <a href='/home'><Image src={logo} wrapped ui={false} /></a>
            {
              menuArray.map((list, index) => {
                return <Menu.Item key={list.label} name={list.label}
                onClick={()=>navigate(list.url)}/>
              })
            }
          </Menu>
          <ChangeTheme/>
        </Grid>
      </Container>
    </div>
  );
}

export default Header;
