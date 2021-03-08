import React, { useEffect, useMemo } from 'react';
import { Header, HeadTitle, Container, CharitiesCard } from '@/components';
import { useCharitesHook, useDonationHook } from '@/hooks';
export default function Home() {
  const {
    fetchCharities,
    charitiesList,
    errorMesssage,
    status,
  } = useCharitesHook();
  const { amount, fetchAmount } = useDonationHook();
  useEffect(() => {
    fetchCharities();
    fetchAmount();
  }, []);

  useMemo(() => {
    console.log('error:', errorMesssage);
  }, [errorMesssage]);

  return (
    <div>
      <Header>Tamboo React</Header>
      <HeadTitle>Donation Amount: {amount} ฿</HeadTitle>
      <Container>
        {charitiesList?.map((value, index) => (
          <CharitiesCard key={index} value={value} />
        ))}
      </Container>
    </div>
  );
}
