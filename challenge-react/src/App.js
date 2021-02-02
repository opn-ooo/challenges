import React, { useEffect, useState } from 'react';

import { summaryDonations } from './helpers';
import AppHeader from './components/AppHeader';
import DonateList from './components/DonateList';
import charityApi from './api/charityApi';
import paymentApi from './api/paymentApi';
import { useDonate } from './context/donateContext';
import Popup from './components/Popup';
import styled from 'styled-components';
const Container = styled.div`
  margin: 0 20px;
`;
const App = () => {
  const donateContext = useDonate();
  const [charities, setCharities] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState();
  useEffect(() => {
    charityApi.getCharities().then((data) => {
      setCharities(data);
    });
    updateTotalPayment();
  }, []);

  const handlePay = (charitiesId, amount, currency) => {
    paymentApi
      .updatePayment({ charitiesId, amount, currency })
      .then(() => {
        updateTotalPayment();
        setPopupMessage('Payment Success');
      })
      .catch(() => {
        setPopupMessage('Payment Failed');
      })
      .finally(() => {
        setShowPopup(true);
      });
  };
  const closePopup = () => {
    setShowPopup(false);
  };
  const updateTotalPayment = () => {
    paymentApi.getPayment().then((data) => {
      donateContext.updateDonateState(
        summaryDonations(data.map((item) => item.amount))
      );
    });
  };

  return (
    <Container>
      <AppHeader />
      <Popup visible={showPopup} onClose={closePopup} message={popupMessage} />

      <h2>All donations: {donateContext.donation.toLocaleString()} ฿</h2>
      {/* <p>{message}</p> */}
      <DonateList charities={charities} handlePay={handlePay} />
    </Container>
  );
};

export default App;
