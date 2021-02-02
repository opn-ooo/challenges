import React from 'react';
import { render } from 'react-dom';
import App from './App';
import DonateProvider from './context/DonateProvider';

render(
  <DonateProvider>
    <App />
  </DonateProvider>,
  document.getElementById('root')
);
