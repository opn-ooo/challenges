const getPayment = () => {
  return fetch('http://localhost:3001/payments')
    .then(function (resp) {
      return resp.json();
    })
    .catch([]);
};

const updatePayment = (body) => {
  return fetch('http://localhost:3001/payments', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
    .then(function (resp) {
      return resp.json();
    })
    .catch({});
};

const paymentApi = { getPayment, updatePayment };
export default paymentApi;
