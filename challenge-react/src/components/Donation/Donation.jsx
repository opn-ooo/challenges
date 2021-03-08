import React from 'react';
import {
  FormWrapper,
  FormStyled,
  RadioWrapper,
  FormSubmitWrapper,
  Button,
} from '@/components';
import { donateCountList } from '@/constants';

export const DonateForm = (props) => (
  <FormWrapper>
    <h4>Select the amiunt to donate ({props.currency})</h4>
    <FormStyled onSubmit={props.onSubmit}>
      <div>
        {donateCountList?.map((amount, index) => (
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
