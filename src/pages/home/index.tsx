import { useHistory } from 'react-router-dom'

export const HomePage = () => {
  const history = useHistory()

  return (
    <div className="home-page-container">
      <h1>首页</h1>
      <button onClick={() => history.push('/demo')}>demo</button>
    </div>
  );
};

export const homeRoute = {
  path: "",
  childRoutes: [{ path: "home", component: HomePage, isIndex: true }],
};
