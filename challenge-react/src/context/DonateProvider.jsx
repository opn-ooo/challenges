import React, { useState } from 'react';
import { donateContext } from './donateContext';
const useProvideDonate = () => {
  const [donation, setDonation] = useState(0);
  const updateDonateState = (value) => {
    setDonation(value);
  };

  return {
    donation,
    updateDonateState,
  };
};
const DonateProvider = ({ children }) => {
  const auth = useProvideDonate();
  return (
    <donateContext.Provider value={auth}>{children}</donateContext.Provider>
  );
};
export default DonateProvider;
