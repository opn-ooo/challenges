import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import loadable from '@loadable/component';

const Home = loadable(() => import('@/pages/Home'));
const Error = loadable(() => import('@/pages/ErrorPage'));

const Layout = loadable(() => import('@/layouts'));
const AppRouter = () => {
  return (
    <Layout>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </BrowserRouter>
    </Layout>
  );
};

export default AppRouter;
