import { List } from 'antd';
import { useNavigate } from 'react-router-dom';

const data = [
  {
    title: '一、搭建React基础框架',
    description: "本篇主要技术选型：react+ts+vite.",
    linkUrl: "/article/1"
  },
  {
    title: '二、React基础框架重构',
    description: "前端UI框架选为 [antd]",
    linkUrl: "/article/2"
  },
  {
    title: '三、React路由管理',
    description: "集成 react-router",
    linkUrl: "/article/3"
  },
  {
    title: '四、React状态管理',
    description: "本篇记录redux的学习",
    linkUrl: "/article/4"
  },
];
const ArticleTop = () => {
  const navigate = useNavigate();

  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
        <List.Item
        actions={[<a  onClick={() => navigate(item.linkUrl)} key="list-loadmore-more">more</a>]}
        >
          <List.Item.Meta
            title={<a onClick={() => navigate(item.linkUrl)}>{item.title}</a>}
            description={item.description}
          />
        </List.Item>
      )}
    />
  );
}

export default ArticleTop;
