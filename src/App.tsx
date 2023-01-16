import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { Layout } from 'antd';
import HeaderContent from '@/components/header'
import Footer from '@/components/footer'

const { Content } = Layout;

function App() {
  const list: any = useSelector((store: any) => store.theme);
  const themeColor = list?.entities?.theme?.color;

  return (
    <Layout className={`flex-column ${themeColor}`}>
      <HeaderContent />
      <Content className="main-content">
        <Outlet />
      </Content>
      <Footer />
    </Layout>
  )
}

export default App
