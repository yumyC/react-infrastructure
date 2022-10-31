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
          title: "文章2",
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
