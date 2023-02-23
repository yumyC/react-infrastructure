import { useSelector, useDispatch } from 'react-redux';
import { getTheme, setTheme } from '@/store/themes/slice';
import { useEffect } from "react";
import { Switch } from 'antd';

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
    const nowColor: string = themeColor==="dark"?'white':'dark';
    dispatch(setTheme({color: nowColor, size: 'small'}) as any);
  }

  if(themeColor) {
    const newColor = themeColor==='dark'?'#333':'#f9f9f9'
    const newFontColor = themeColor==='dark'?'#f9f9f9':'#333'
    const rootDom:any = document.querySelector(':root');
    rootDom.style.setProperty('--theme-color', newColor);
    rootDom.style.setProperty('--font-color', newFontColor);
  }
  return (
    <div className='flex-column-center'>
      <Switch
        checkedChildren={'light'}
        unCheckedChildren={'dark'}
        defaultChecked
        onChange={setThemeColor}
      />
    </div>
  );
};
export default changeTheme;
