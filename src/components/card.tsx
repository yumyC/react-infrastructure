import { Card, Button, Image } from 'react-bootstrap'

interface cardInfo {
  name: string,
  description?: string,
  logoSrc?: string,
  linkUrl?: string,
  slot?: any
}

const CardExampleCard: React.FC<cardInfo> = (props) => {
  const {name, logoSrc, linkUrl, description, slot} = props
  const date:string = new Date().toLocaleString();

  return (
    <Card>
      {
        logoSrc?<Image src={logoSrc} />:null
      }
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {description?description:null}
        </Card.Text>
        <span className='date'>{date}</span>
      </Card.Body>

      {
        linkUrl?
        <Card.Body>
          <Button><a></a></Button>
        </Card.Body>:null
      }

      {
        slot?
        <Card.Body>
         {slot}
        </Card.Body>:null
      }
    </Card>
  )
}

export default CardExampleCard
