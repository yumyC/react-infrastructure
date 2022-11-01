import { Link, Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getTheme, setTheme } from '@/store/themes/slice';
import { useEffect } from "react";
import { Button } from 'semantic-ui-react';

const changeTheme = () => {
  const dispatch = useDispatch();
  useEffect(() => {
  }, [])

  const list: any = useSelector((store: any) => store.theme);
  const themeColor = list?.entities?.theme?.color;
  if (!Object.keys(list.entities).length || !list.entities) {
    dispatch(getTheme() as any);
  }

  const setThemeColor = () => {
    const nowColor: string = themeColor==="black"?'white':'black';
    dispatch(setTheme({color: nowColor, size: 'small'}) as any);
  }

  if(themeColor) {
    const newColor = themeColor==='black'?'#3e1058':'#ffffff'
    const newFontColor = themeColor==='black'?'#ffffff':'#444'
    const newSecondaryColor = themeColor==='black'?'#4f3c64':'#ffffff'
    const rootDom:any = document.querySelector(':root');
    rootDom.style.setProperty('--theme-color', newColor);
    rootDom.style.setProperty('--theme-secondary-color', newSecondaryColor);
    rootDom.style.setProperty('--font-color', newFontColor);
  }
  return (
    <div className='flex-column-center'>
        <Button primary onClick={setThemeColor}>切换主题</Button>
    </div>
  );
};
export default changeTheme;
