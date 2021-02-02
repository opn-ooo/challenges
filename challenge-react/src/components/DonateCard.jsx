import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import DonateForm from './DonateForm';
import Modal from './Modal';

const Card = styled.div`
  height: 270px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  display: flex;
  border-radius: 3px;
  position: relative;
  box-shadow: 2px 2px 4px 0px #e2e2e2;
  flex-direction: column;
`;

const CartMedia = styled.img`
  height: calc(100% - 70px);
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: top;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  margin: 20px;
  align-items: center;
`;

const DonateCard = (props) => {
  const [formVisible, setFormVisible] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(
      props.item.id,
      parseInt(e.target.payment.value),
      props.item.currency
    );
    e.target.reset();
    toggleDonateForm();
  };

  const toggleDonateForm = () => {
    setFormVisible(!formVisible);
  };
  return (
    <Card className={props.className}>
      <Modal visible={formVisible} onClose={toggleDonateForm}>
        <DonateForm onSubmit={handleSubmit} currency={props.item.currency} />
      </Modal>
      <div style={{ overflow: 'hidden' }}>
        <CartMedia src={`/images/${props.item.image}`} />
      </div>
      <CardFooter>
        <p style={{ margin: 0 }}>{props.item.name}</p>

        <Button id={'donate-btn'} onClick={toggleDonateForm}>
          Donate
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DonateCard;
