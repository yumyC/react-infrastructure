import { useEffect } from "react";
import React from "react";
import { Layout, Row, Col, Card, Timeline} from 'antd';
import './home.module.scss';
import YumyCard from '@/components/card'
import info from '@/assets/img/info.png'
import Qrcode from "@/components/qrcode";

const { Meta } = Card;

const home = () => {
  useEffect(() => {
  }, [])
  return (
    <Layout>
      <Row>
        <Col>
          <YumyCard
            name='yummy'
            logoSrc={info}
            description='so sweet'
          />
          <YumyCard
            name='contact me'
            slot={<Qrcode link='https://github.com/yumyC/react-infrastructure'/>}
          />
        </Col>
        <Col lg={8} md={5}>
        <YumyCard
            name='Article'
          />
        </Col>
        <Col>
        <Timeline>
          <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
          <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
          <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
          <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
        </Timeline>
        </Col>
      </Row>
    </Layout>
  );
};
export default home;
