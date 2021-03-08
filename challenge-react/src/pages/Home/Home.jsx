import React, { useEffect } from 'react';
import {
  Header,
  HeadTitle,
  Container,
  CharitiesCard,
  CharityCardLoader,
} from '@/components';
import { useCharitesHook, useDonationHook } from '@/hooks';
import { useToasts } from 'react-toast-notifications';
import { STATUS_MESSAGE } from '@/constants';

export default function Home() {
  const { addToast } = useToasts();
  const {
    fetchCharities,
    charitiesList,
    errorFetchMesssage,
    status,
  } = useCharitesHook();
  const {
    amount,
    fetchAmount,
    errorMessage,
    successMessage,
  } = useDonationHook();
  useEffect(() => {
    fetchCharities();
    fetchAmount();
  }, []);

  useEffect(() => {
    if (errorMessage) {
      addToast(errorMessage, {
        appearance: 'error',
        autoDismiss: true,
      });
    }
  }, [errorMessage]);

  useEffect(() => {
    if (errorFetchMesssage) {
      addToast(errorFetchMesssage, {
        appearance: 'error',
        autoDismiss: true,
      });
    }
  }, [errorFetchMesssage]);

  useEffect(() => {
    if (successMessage) {
      addToast(successMessage, {
        appearance: 'success',
        autoDismiss: true,
      });
    }
  }, [successMessage]);

  return (
    <div>
      <Header>Tamboo React</Header>
      <HeadTitle>Donation Amount: {amount} ฿</HeadTitle>
      {status === STATUS_MESSAGE.LOADING && <CharityCardLoader />}
      <Container>
        {charitiesList?.map((value, index) => (
          <CharitiesCard key={index} value={value} />
        ))}
      </Container>
    </div>
  );
}
