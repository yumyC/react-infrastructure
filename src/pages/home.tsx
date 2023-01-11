import { useEffect } from "react";
import { Container, Row, Col, Card, Button} from 'react-bootstrap';
import './home.module.scss';
import YumyCard from '@/components/card'
import info from '@/assets/img/info.png'
import Qrcode from "@/components/qrcode";

const home = () => {
  useEffect(() => {
  }, [])
  return (
    <Container>
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
        <Col lg={8}>
          <Card>
            <Card.Header as="h5">Featured</Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <YumyCard
            name='timeline'
          />
        </Col>
      </Row>
    </Container>
  );
};
export default home;
