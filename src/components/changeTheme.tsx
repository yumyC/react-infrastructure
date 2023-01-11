import { Link, Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getTheme, setTheme } from '@/store/themes/slice';
import { useEffect } from "react";
import { Button } from 'semantic-ui-react';
import { jsPDF } from "jspdf";
// import font from "./NotoSansCJKtc-Regular-normal";

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

    // const doc = new jsPDF();

    // doc.addFileToVFS('NotoSansCJKtc-Regular-normal.ttf', font);
    // doc.addFont('NotoSansCJKtc-Regular-normal.ttf', 'NotoSansCJKtc-Regular', 'normal');
    // doc.setFont("NotoSansCJKtc-Regular");
    // doc.text("你好!", 10, 10);
    // doc.save("a4.pdf");
  }

  if(themeColor) {
    const newColor = themeColor==='black'?'#3e1058':'#ffffff'
    const newFontColor = themeColor==='black'?'#ffffff':'#444'
    const newSecondaryColor = themeColor==='black'?'#4f3c64':'#f7f7f7'
    const rootDom:any = document.querySelector(':root');
    rootDom.style.setProperty('--theme-color', newColor);
    rootDom.style.setProperty('--theme-secondary-color', newSecondaryColor);
    rootDom.style.setProperty('--font-color', newFontColor);
  }
  return (
    <div className='flex-column-center'>
        <Button primary onClick={setThemeColor}>changeTheme</Button>
    </div>
  );
};
export default changeTheme;
