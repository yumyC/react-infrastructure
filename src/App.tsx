import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import type { MenuProps } from 'semantic-ui-react';
import { Grid, Container, Menu } from 'semantic-ui-react';
import Footer from '@/components/footer'

const menuArray = [
  {
    'label': 'home',
    'url': '/home'
  },
  {
    'label': 'about',
    'url': '/about'
  },
  {
    'label': 'dashboard',
    'url': '/dashboard'
  },
]

function App() {
  const navigate = useNavigate();

  const items: MenuProps['items'] = menuArray.map((list, index) => ({
    key: String(index + 1),
    name: ` ${list.label}`,
    onClick: () => navigate(list.url)
  }));

  const list: any = useSelector((store: any) => store.theme);
  const themeColor = list?.entities?.theme?.color;

  return (
    <div className={`app ${themeColor}`}>
      <Grid className="flex-column">
          <div className="header">
            <Container>
              <Menu fluid tabular items={items} />
            </Container>
          </div>
          <div className="main-content">
            <Container>
              <Outlet />
            </Container>
          </div>
          <div className="footer">
            <Footer></Footer>
          </div>
      </Grid>
    </div>
  )
}

export default App
