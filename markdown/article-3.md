# 三、路由管理
## **1. 集成 react-router**
~~~js
$ npm install react-router-dom@6
~~~
## **2. 路由配置**
思路： 创建路由对象->渲染路由->引入挂载路由
- **路由懒加载**
~~~js
const Test = React.lazy(() => import('你的组件'));
<Suspense fallback="loading...">
  <Test />
</Suspense>
~~~
- 创建路由对象
~~~js
// 声明对象类型
export interface routeType {
  path: string
  // 非必传
  element?: any
  // 非必传
  children?: Array<routeType>
  // 允许加入任意值
  // 在实参中新增了sex属性，interface中并没有定义，此时不会报错
  [propname: string]: any;
  // 非必传
  meta?: {
    title?: string
  }
  // 非必传
  redirect?: string
}

const routes: Array<routeType> = [
  {
    path: '/',
    element: () => import('../App'),
    children: [
      {
        path: '/',
        redirect: '/home',
      },
      {
        path: '/home',
        element: () => import('@/pages/home'),
        meta: {
          title: "首页",
        }
      },
      {
        path: '/about',
        element: () => import('@/pages/about'),
        meta: {
          title: "关于",
        }
      },
      {
        path: '/about/:id',
        element: () => import('@/pages/about'),
        meta: {
          title: "关于",
        }
      },
      {
        path: '*',
        element: () => import('@/pages/error/404'),
        meta: {
          title: '404'
        }
      }
    ]
  },
]

export default routes;

~~~
- 渲染路由
~~~js
import React from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
import _ from 'lodash'; // js工具库
import routes, { routeType } from './routers';

export default function Routes() {
  const element = useRoutes(renderRoutes(routes));
  return element;
}

function renderRoutes(routes: Array<routeType>) {
  return _.map(routes, (item: routeType) => {
    let res: routeType = { ...item };
    if (!item?.path) return;

    // element
    if (item?.element) {
      const Component = React.lazy(item.element);
      res.element = (<React.Suspense fallback={'...'}>
          <Component />
      </React.Suspense>);
    }

    // children
    if (item?.children) {
      res.children = renderRoutes(item.children);
    }

    // 重定向
    if (item?.redirect) {
      res.element = (
        <Navigate to={item.redirect} replace />
      )
    }

    return res;
  })
}


~~~
- 引入挂载路由
 ~~~js
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Routes from '@/router/index'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes/>
    </BrowserRouter>
  </React.StrictMode>
)
~~~
