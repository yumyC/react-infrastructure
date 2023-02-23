import { useSelector } from 'react-redux';
import {Row, Col,Timeline} from 'antd';
import Qrcode from "@/components/qrcode";
import YumyCard from '@/components/card'
function about() {

  const list: any = useSelector((store: any) => store.theme);
  const themeColor = list?.entities?.theme?.color;
  return (
    <div>
       <Row justify={'space-between'} gutter={[16, 20]}>
        <Col lg={24} md={24} sm={24} xs={24}>
          <YumyCard
                name='关于此博客'
                description='一个基础的纯前端的利用react框架搭建的博客，可更改主题，可查看文章。'
              />
        </Col>
        <Col lg={24} md={24} sm={24} xs={24}>
          <YumyCard
                name='timeline'
                slot={<Timeline>
                  <Timeline.Item>Create a basic react demo 2022-10-20</Timeline.Item>
                  <Timeline.Item>Add ant UI 2023-01-16</Timeline.Item>
                  <Timeline.Item>Add react markdown 2023-01-17</Timeline.Item>
                  <Timeline.Item>Add other page 2023-01-18</Timeline.Item>
                </Timeline>}
              />
        </Col>
      </Row>
    </div>
  );
}

export default about;
