import logo from '../assets/img/logo.png'
import { Card, Button, Image } from 'semantic-ui-react'

interface cardInfo {
  name: string,
  logoSrc?: string,
  linkUrl?: string
}

const CardExampleCard: React.FC<cardInfo> = (props) => {
  const {name, logoSrc, linkUrl} = props
  const date:any = new Date().toLocaleString();

  return (
    <Card>
      {
        logoSrc?<Image src={logoSrc} wrapped ui={false} />:null
      }
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
          <span className='date'>{date}</span>
        </Card.Meta>
        <Card.Description>
          so sweet.
        </Card.Description>
      </Card.Content>

      {
        linkUrl?
        <Card.Content extra>
          <Button><a></a></Button>
        </Card.Content>:null
      }
    </Card>
  )
}

export default CardExampleCard