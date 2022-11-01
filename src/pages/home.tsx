import { useEffect } from "react";
import Card from '@/components/card'
import info from '@/assets/img/info.png'
import './home.module.scss';

const home = () => {
  useEffect(() => {
  }, [])
  return (
    <Card name='yummy' logoSrc={info} description='so sweet' />
  );
};
export default home;
