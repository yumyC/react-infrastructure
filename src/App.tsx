import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { Layout, ConfigProvider } from 'antd';
import Header from '@/components/header'
import Footer from '@/components/footer'

const { Content } = Layout;

function App() {
  const list: any = useSelector((store: any) => store.theme);
  const themeColor = list?.entities?.theme?.color;

  return (
    <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#eb00ff',
            colorLink: '#eb00ff',
          },
        }}
      >
      <Layout className={`flex-column ${themeColor}`}>
        <Header />
        <Content role={'main'} className="main-content">
          <a id="main-content" tabIndex={-1}></a>
          <div className="max-1400"><Outlet /></div>
        </Content>
        <Footer />
      </Layout>
    </ConfigProvider>
  )
}

export default App
