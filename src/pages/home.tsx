import { useEffect } from "react";
import { Layout, Row, Col, Timeline} from 'antd';
import './home.module.less';
import YumyCard from '@/components/card'
import info from '@/assets/img/info.png'
import Qrcode from "@/components/qrcode";
import ArticleList from "@/article/articleTop";

const home = () => {
  useEffect(() => {
  }, [])
  return (
    <Layout>
      <Row justify={'space-between'} gutter={[16, 20]}>
        <Col lg={4} md={24} sm={24} xs={24}>
        <Row justify={'space-between'}  gutter={[16, 20]}>
          <Col span={24}>
          <YumyCard
            name='yummy'
            isShowDate={true}
            logoSrc={info}
            description='so sweet'
          /></Col>
          <Col span={24}>
          <YumyCard
            name='contact me'
            slot={<Qrcode link='https://github.com/yumyC/react-infrastructure'/>}
          /></Col>
        </Row>
        </Col>
        <Col lg={14} md={24} sm={24} xs={24}>
          <ArticleList/>
        </Col>
        <Col lg={6} md={24} sm={24} xs={24}>
          <YumyCard
            name='timeline'
            slot={<Timeline>
              <Timeline.Item>Create a basic react demo 2022-10-20</Timeline.Item>
              <Timeline.Item>Add ant UI 2023-01-16</Timeline.Item>
            </Timeline>}
          />
        </Col>
      </Row>
    </Layout>
  );
};
export default home;
