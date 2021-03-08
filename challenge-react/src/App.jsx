import React from 'react';
import loadable from '@loadable/component';
const AppRouter = loadable(() => import('@/routers'));

export default function App() {
  return (
    <React.Fragment>
      <AppRouter />
    </React.Fragment>
  );
}
