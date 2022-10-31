import { Link, Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getTheme, setTheme } from '@/store/themes/slice';
import { useEffect } from "react";

const home = () => {
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
  return (
    <div>
      <div>
        当前主题色： {themeColor} <button onClick={setThemeColor}>点我切换主题色</button>
      </div>
      {/* Outlet相当于是子路由的占位符 */}
      <Outlet />
    </div>
  );
};
export default home;
