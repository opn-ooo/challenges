import React, { useState, useEffect, useMemo } from 'react';
import { summaryDonations } from '@/helpers';
import { ImgMedia, Card, Container, Button } from '@/components';
import { replaceImg } from '@/utils';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  background-color: hsla(0, 0%, 100%, 0.904);
  height: 100%;
  width: 100%;
  display: block;
  border-radius: 4px;
  box-shadow: 2px 2px 2px 2px #e2e2e2;
  top: 0;
  left: 0;
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
`;

export const CloseButton = styled.div`
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  padding: 15px;
  font-size: 2rem;
  @media (min-width: 768px) {
    font-size: 1.8rem;
  }
  @media (min-width: 1024px) {
    font-size: 1.4rem;
  }
  &::before {
    content: 'x';
  }
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  margin: 20px;
  align-items: center;
`;

const FormWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  font-size: 2rem;
  @media (min-width: 768px) {
    font-size: 1.4rem;
  }
  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormSubmitWrapper = styled.div`
  margin: 20px;
`;

const RadioWrapper = styled.label`
  margin-right: 5px;
`;

const ContainerImg = styled.div`
  display: flex;
  margin: 1.5rem;
  height: 250px;
  justify-content: center;
  @media (min-width: 768px) {
    height: 160px;
  }
  @media (min-width: 1024px) {
    height: 250px;
  }
`;

const DonateForm = (props) => (
  <FormWrapper>
    <h4>Select the amiunt to donate ({props.currency})</h4>
    <FormStyled onSubmit={props.onSubmit}>
      <div>
        {[10, 20, 50, 100, 500].map((amount, index) => (
          <RadioWrapper key={amount}>
            <input
              type="radio"
              name="payment"
              value={amount}
              required={index === 0}
            />
            {amount}
          </RadioWrapper>
        ))}
      </div>
      <FormSubmitWrapper>
        <Button type="submit">Pay</Button>
      </FormSubmitWrapper>
    </FormStyled>
  </FormWrapper>
);

const Modal = (props) => (
  <Wrapper visible={props.visible}>
    <CloseButton onClick={props.onClose} />
    {props.children}
  </Wrapper>
);

const Header = styled.header`
  display: flex;
  justify-content: center;
  font-size: 3rem;
  margin: 1rem;
`;
import { CharitesHook } from '@/hooks';
export default function Home() {
  const { fetchCharities, charitiesList, errorMesssage, status } = CharitesHook();
  useEffect(() => {
    fetchCharities();
    console.log(charitiesList);
  }, []);

  useMemo(() => {
    console.log('error:', errorMesssage);
  }, [errorMesssage]);

  return (
    <div>
      <Header>Tamboo React</Header>
      {/* {console.log(charitiesList)} */}
      {console.log(errorMesssage, status)}
      <Container>
        {charitiesList?.map((box, index) => (
          <CharitiesCard key={index} box={box} />
        ))}
      </Container>
    </div>
  );
}

const Title = styled.p`
font-size: 2rem;
@media (min-width: 768px) {
  font-size: 1.5rem;
}
@media (min-width: 1024px) {
  font-size: 1rem;
}
`

const CharitiesCard = ({ box }) => {
  const [formVisible, setFormVisible] = useState(false);
  const toggleDonateForm = () =>
    setFormVisible(!formVisible);


  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Card>
      <Modal visible={formVisible} onClose={toggleDonateForm}>
        <DonateForm onSubmit={handleSubmit} currency={'THB'} />
      </Modal>
      <Images src={box?.image} />
      <CardFooter>
        <Title>{box?.name}</Title>
        <Button id={'donate-btn'} onClick={toggleDonateForm}>
          Donate
        </Button>
      </CardFooter>
    </Card>
  );
};

const Images = ({ src }) => {
  return (
    <ContainerImg>
      <ImgMedia src={replaceImg(src)} alt={src} />
    </ContainerImg>
  )
}
