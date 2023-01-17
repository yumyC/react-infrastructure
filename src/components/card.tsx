import { Card, Button, Image } from 'antd'
import { useNavigate } from 'react-router-dom';

interface cardInfo {
  name: string,
  isShowDate?: boolean,
  description?: string,
  logoSrc?: string,
  linkUrl?: string,
  slot?: any
}

const CardExampleCard: React.FC<cardInfo> = (props) => {
  const {name, isShowDate=false, logoSrc, linkUrl, description, slot} = props
  const date:string = new Date().toLocaleString();
  const navigate = useNavigate();

  return (
    <Card bordered={false} cover={
      logoSrc?<Image src={logoSrc} />:null
     }
    >

    <div>
      <h3>{name}</h3>
      <div>
        {description?description:null}
      </div>
      {isShowDate?<span className='date'>{date}</span>:null}
    </div>

    {
      slot?
      <div>
        {slot}
      </div>:null
    }
    {
      linkUrl?
      <div className='card-link'><Button type="link" onClick={() => navigate(linkUrl)}>View more</Button></div>
      :null
    }
    </Card>
  )
}

export default CardExampleCard
