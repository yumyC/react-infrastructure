const routes = [
    {
        path: '/',
        component: () => import('../App'),
        children: [
            {
                path: '/',
                redirect: '/home',
            },
            {
                path: '/home',
                component: () => import('@/pages/home'),
                meta: {
                    title: "首页",
                }
            },
            {
                path: '/about',
                component: () => import('@/pages/about'),
                meta: {
                    title: "关于",
                }
            },
            {
                path: '/about/:id',
                component: () => import('@/pages/about'),
                meta: {
                    title: "文章2",
                }
            },
            {
                path: '*',
                component: () => import('@/pages/error/404'),
                meta: {
                    title: '404'
                }
            }
        ]
    },
];
export default routes;
//# sourceMappingURL=routers.js.map