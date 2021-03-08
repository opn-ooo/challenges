
import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: center;
  font-size: 3rem;
  margin: 1rem;
`;

export const HeadTitle = styled.h2`
  margin-left: 2rem;
  margin-top: 2rem;
  margin-right: 2rem;
`;

export const Title = styled.p`
  font-size: 2rem;
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;
