import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { Grid, Container, Menu, Dropdown, Image } from 'semantic-ui-react';
import Header from '@/components/header'
import Footer from '@/components/footer'

function App() {
  const list: any = useSelector((store: any) => store.theme);
  const themeColor = list?.entities?.theme?.color;

  return (
    <div className={`app ${themeColor}`}>
      <Grid className="flex-column">
          <Header />
          <div className="main-content">
            <Container>
              <Outlet />
            </Container>
          </div>
          <Footer />
      </Grid>
    </div>
  )
}

export default App
