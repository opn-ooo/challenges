import styled from 'styled-components';

export const Button = styled.button`
  padding: 5px 7px;
  border-radius: 3px;
  border: solid 2px #2172ef;
  cursor: pointer;
  background-color: white;
  color: #2172ef;
  font-size: 2rem;
  &:focus {
    outline: 0;
  }
  &:hover {
    background-color: #2172ef;
    color: white;
  }
  @media (min-width: 768px) {
    font-size: 1.4rem;
  }
  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;
