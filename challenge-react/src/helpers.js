export const summaryDonations = (danations) =>
  danations.reduce((accumulator, value) => accumulator + value);

export const removeCommaNumber = (val) => {
  if (val) {
    return val.toString().replace(/,/g, "");
  }
  return val;
};

export const addCommaNumber = (val) => {
  if (val) {
    let data = removeCommaNumber(val);
    data = parseInt(data)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return data;
  }
  return val;
};
