import styled from 'styled-components';

export const Button = styled.button`
  background-color: #2172ef;
  padding: 5px 7px;
  color: white;
  font-size: 1.2rem;
  border-radius: 3px;
  border: solid 2px white;
  cursor: pointer;
  &:focus {
    outline: 0;
  }
  &:hover {
    background-color: white;
    color: #2172ef;
    border: solid 2px #2172ef;
  }
`;
