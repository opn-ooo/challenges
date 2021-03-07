import React from 'react';
import { Helmet } from 'react-helmet';
import {Global} from '../global';
export default function Layout({ children }) {
  return (
    <React.Fragment>
      <Helmet>
        <meta
          name="viewport"
          content="width=device-width, minimum-scale=1, maximum-scale=1"
        />
<link rel="preconnect" href="https://fonts.gstatic.com"/>
<link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Raleway&display=swap" rel="stylesheet"/>
      </Helmet>
      <Global />
      <div>{children}</div>
    </React.Fragment>
  );
}
