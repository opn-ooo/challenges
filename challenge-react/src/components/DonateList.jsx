import React from 'react';
import styled from 'styled-components';
import DonateCard from './DonateCard';

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (min-width: 1024px) {
    margin: 0 50px;
  }
`;

const DonateCardItem = styled(DonateCard)`
  margin: 20px;
  width: 100%;
  @media (min-width: 1024px) {
    width: calc(50% - 40px);
  }
`;

const DonateList = ({ charities, handlePay }) => {
  const handleSubmit = (id, value, currency) => {
    handlePay(id, value, currency);
  };
  return (
    <CardWrapper>
      {charities.map((item) => (
        <DonateCardItem item={item} key={item.id} onSubmit={handleSubmit} />
      ))}
    </CardWrapper>
  );
};

export default DonateList;
