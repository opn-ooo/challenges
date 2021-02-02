const getCharities = () => {
  return fetch('http://localhost:3001/charities')
    .then(function (resp) {
      return resp.json();
    })
    .catch([]);
};
const charityApi = { getCharities };
export default charityApi;
