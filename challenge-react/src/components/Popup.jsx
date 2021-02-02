import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  transition: opacity 500ms;
  visibility: hidden;
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.visible ? 1 : 0)};
  z-index: 99;
`;

const PopupWrapper = styled.div`
  margin: 70px auto;
  padding: 20px;
  background: #fff;
  border-radius: 5px;
  width: 30%;
  position: relative;
  transition: all 5s ease-in-out;
  text-align: center;
`;

const Popup = (props) => {
  return (
    <Overlay visible={props.visible}>
      <PopupWrapper>
        <h2>{props.message}</h2>
        <Button id={"close-popup-btn"} onClick={props.onClose}>Close</Button>
      </PopupWrapper>
    </Overlay>
  );
};

export default Popup;
