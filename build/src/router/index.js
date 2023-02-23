import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import React from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
import _ from 'lodash';
import routes from './routers';
export default function Routes() {
    const element = useRoutes(renderRoutes(routes));
    return element;
}
function renderRoutes(routes) {
    return _.map(routes, (item) => {
        let res = Object.assign({}, item);
        if (!(item === null || item === void 0 ? void 0 : item.path))
            return;
        // component
        if (item === null || item === void 0 ? void 0 : item.component) {
            const Component = React.lazy(item.component);
            res.element = (_jsx(React.Suspense, Object.assign({ fallback: _jsx(_Fragment, { children: "..." }) }, { children: _jsx(Component, {}) })));
        }
        // children
        if (item === null || item === void 0 ? void 0 : item.children) {
            res.children = renderRoutes(item.children);
        }
        // 重定向
        if (item === null || item === void 0 ? void 0 : item.redirect) {
            res.element = (_jsx(Navigate, { to: item.redirect, replace: true }));
        }
        return res;
    });
}
//# sourceMappingURL=index.js.map