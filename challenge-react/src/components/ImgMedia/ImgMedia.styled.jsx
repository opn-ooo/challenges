import styled from 'styled-components';

export const ImgMedia = styled.img`
  min-height: 100%;
  min-width: 100%;
  border-radius: 2px;
  object-position: top;
`;

export const ContainerImg = styled.div`
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
