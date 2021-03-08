import React, { useState } from 'react';
import {
  Card,
  Modal,
  DonateForm,
  CardFooter,
  Button,
  ImagesMedia,
  Title,
} from '@/components';
import { useDonationHook } from '@/hooks';

export const CharitiesCard = ({ value }) => {
  const { donate } = useDonationHook();
  const [formVisible, setFormVisible] = useState(false);

  const toggleDonateForm = () => setFormVisible(!formVisible);
  const handleSubmit = (e) => {
    e.preventDefault();
    toggleDonateForm();
    const payload = {
      amount: parseInt(e.target.payment.value),
      charitiesId: value.id,
      currency: value.currency,
    };
    donate(payload);
  };

  return (
    <Card>
      <Modal visible={formVisible} onClose={toggleDonateForm}>
        <DonateForm onSubmit={handleSubmit} currency={'THB'} />
      </Modal>
      <ImagesMedia src={value?.image} />
      <CardFooter>
        <Title>{value?.name}</Title>
        <Button onClick={toggleDonateForm}>Donate</Button>
      </CardFooter>
    </Card>
  );
};
