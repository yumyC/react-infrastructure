import { useEffect } from "react";
import { Grid, Icon, Card} from 'semantic-ui-react';
import './home.module.scss';
import YumyCard from '@/components/card'
import info from '@/assets/img/info.png'
import Qrcode from "@/components/qrcode";

const home = () => {
  useEffect(() => {
  }, [])
  return (
    <Grid columns='equal'>
      <Grid.Column>
        <YumyCard
          name='yummy'
          logoSrc={info}
          description='so sweet'
          slot={<Icon name='like' />}
        />
        <YumyCard
          name='contact me'
          slot={<Qrcode link='https://github.com/yumyC/react-infrastructure'/>}
        />
      </Grid.Column>
      <Grid.Column width={8}>
        <Card.Group>
          <Card fluid color='red' header='article 1'>
          </Card>
          <Card fluid color='orange' header='article 2' />
          <Card fluid color='yellow' header='article 3' />
        </Card.Group>
      </Grid.Column>
      <Grid.Column>
        <YumyCard
          name='timeline'
        />
      </Grid.Column>
    </Grid>
  );
};
export default home;
