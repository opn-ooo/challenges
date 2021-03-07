import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import loadable from '@loadable/component';

const Home = loadable(() => import('@/pages/Home'));
const Layout = loadable(() => import('@/layouts'));
const AppRouter = () => {
  return (
    <Layout>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </Layout>
  );
};

export default AppRouter;
