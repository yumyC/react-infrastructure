import { Card, Button, Image } from 'antd'

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
    <Card cover={
      logoSrc?<Image src={logoSrc} />:null
    }>

      <div>
        <div>{name}</div>
        <div>
          {description?description:null}
        </div>
        <span className='date'>{date}</span>
      </div>

      {
        linkUrl?
        <div>
          <Button><a></a></Button>
        </div>:null
      }

      {
        slot?
        <div>
         {slot}
        </div>:null
      }
    </Card>
  )
}

export default CardExampleCard
