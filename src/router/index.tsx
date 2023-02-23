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
