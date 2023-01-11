import { Container, Nav, Navbar, Image } from 'react-bootstrap';
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
        <Navbar bg="light" variant="light">
          <Container>
            <Navbar.Brand href="/home"><Image src={logo} /></Navbar.Brand>
            <Nav className="me-auto">
              {
                menuArray.map((list, index) => {
                  return <Nav.Link onClick={()=>navigate(list.url)}>{list.label}</Nav.Link>
                })
              }
            </Nav>
            <ChangeTheme/>
          </Container>
        </Navbar>
      </Container>
    </div>
  );
}

export default Header;
