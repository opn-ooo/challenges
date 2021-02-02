import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: white;
  padding: 5px 7px;
  color: #2172ef;
  font-size: 14px;
  border-radius: 3px;
  border: solid 2px #2172ef;
  cursor: pointer;
  &:focus {
    outline: 0;
  }
`;

export default Button;
