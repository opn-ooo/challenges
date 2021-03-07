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

/**
 * Handle pay button
 * 
 * @param {*} The charities Id
 * @param {*} amount The amount was selected
 * @param {*} currency The currency
 * 
 * @example
 * fetch('http://localhost:3001/payments', {
      method: 'POST',
      body: `{ "charitiesId": ${id}, "amount": ${amount}, "currency": "${currency}" }`,
    })
 */
function handlePay(id, amount, currency) {}
