import React, { useState } from 'react';
import axios from 'axios';
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

const DonateForm = (props) => (
  <FormWrapper>
    <h4>Select the amiunt to donate ({props.currency})</h4>
    <FormStyled onSubmit={props.onSubmit}>
      <div>
        {[10, 20, 50, 100, 500].map((amount, j) => (
          <RadioWrapper key={amount}>
            <input
              type="radio"
              name="payment"
              value={amount}
              required={j === 0}
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

export default function Home() {
  return (
    <div>
      <Header>
        Tamboo React
      </Header>
      <Container>
        {[1, 2, 3, 4].map((box, index) => (
          <CharitiesCard key={index} box={box} />
        ))}
      </Container>
    </div>
  );
}

const CharitiesCard = ({ box }) => {
  const [formVisible, setFormVisible] = useState(false);
  console.log(summaryDonations([1, 2, 3, 4]));
  const toggleDonateForm = () => {
    setFormVisible(!formVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Card>
      <Modal visible={formVisible} onClose={toggleDonateForm}>
        <DonateForm onSubmit={handleSubmit} currency={'THB'} />
      </Modal>
      <ImgMedia src={replaceImg('baan-kru-noi.jpg')} alt="" />
      <CardFooter>
        <p>Box</p>

        <Button id={'donate-btn'} onClick={toggleDonateForm}>
          Donate
        </Button>
      </CardFooter>
    </Card>
  );
};
