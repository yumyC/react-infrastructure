import QRcode from 'qrcode';
import { useEffect, useState } from 'react';

const Qrcode: React.FC<any> = (props)=> {
  const {link} = props;
  const [imgsrc, setQrcode] = useState<string>('');
  useEffect(() => {
    QRcode.toDataURL(link, function (err, url) {
      setQrcode(url);
    })
  }, [imgsrc]);
  return (
    <div className='qrcode'>
      <img src={imgsrc}/>
    </div>
  );
}

export default Qrcode;
