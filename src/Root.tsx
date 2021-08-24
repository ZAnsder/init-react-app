import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { history, routes } from "router";
import store from "store";

function renderRootRouteConfig(routes: any, contextPath: string) {
  // Resolve route config object in React Router v3.
  const children: any[] = []; // children component list

  const renderRoute = (item: any, routeContextPath: string) => {
    let newContextPath: string = "";
    if (/^\//.test(item.path)) {
      newContextPath = item.path;
    } else {
      newContextPath = `${routeContextPath}/${item.path}`;
    }
    newContextPath = newContextPath.replace(/\/+/g, "/");
    if (item.component && item.childRoutes) {
      const childRoutes = renderRootRouteConfig(
        item.childRoutes,
        newContextPath
      );
      children.push(
        <Route
          key={newContextPath}
          render={(props) => (
            <item.component {...props}> {childRoutes} </item.component>
          )}
          path={newContextPath}
        />
      );
    } else if (item.component) {
      children.push(
        <Route
          key={newContextPath}
          component={item.component}
          path={newContextPath}
          exact
        />
      );
    } else if (item.childRoutes) {
      item.childRoutes.forEach((r: any) => renderRoute(r, newContextPath));
    }
  };

  routes.forEach((item: any) => renderRoute(item, contextPath));

  // Use Switch so that only the first matched route is rendered.
  return <Switch>{children}</Switch>;
}

function Root() {
  const children = renderRootRouteConfig(routes, "/");

  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>{children}</ConnectedRouter>
    </Provider>
  );
}

export default Root;
