import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  background-color: hsla(0, 0%, 100%, 0.904);
  height: 100%;
  width: 100%;
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
  font-size: 18px;
  &::before {
    content: 'x';
  }
`;
const Modal = (props) => {
  return (
    <Wrapper visible={props.visible}>
      <CloseButton onClick={props.onClose} />
      {props.children}
    </Wrapper>
  );
};

export default Modal;
