import React from 'react';
import { Helmet } from 'react-helmet';
import { Global } from '../global';
import { ToastProvider } from 'react-toast-notifications';

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <Helmet>
        <meta
          name="viewport"
          content="width=device-width, minimum-scale=1, maximum-scale=1"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Raleway&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Global />
      <ToastProvider>
        <div>{children}</div>
      </ToastProvider>
    </React.Fragment>
  );
}
