import { useSelector } from 'react-redux';
function about() {

  const list: any = useSelector((store: any) => store.theme);
  const themeColor = list?.entities?.theme?.color;
  return (
    <div>
      当前主题色为：{themeColor}
    </div>
  );
}

export default about;
