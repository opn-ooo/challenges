import styled from 'styled-components';

export const Wrapper = styled.div`
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
