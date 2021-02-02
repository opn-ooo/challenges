import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const FormWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
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

const DonateForm = (props) => {
  return (
    <FormWrapper>
      <h3>Select the amiunt to donate ({props.currency})</h3>
      <FormStyled onSubmit={props.onSubmit}>
        <div>
          {[10, 20, 50, 100, 500].map((amount, j) => (
            <RadioWrapper key={amount}>
              {j === 0 ? (
                <input type="radio" name="payment" value={amount} required />
              ) : (
                <input type="radio" name="payment" value={amount} />
              )}

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
};

export default DonateForm;
