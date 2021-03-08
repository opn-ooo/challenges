import React from 'react';
import { Wrapper, CloseButton } from '@/components';
export const Modal = (props) => (
  <Wrapper visible={props.visible}>
    <CloseButton onClick={props.onClose} />
    {props.children}
  </Wrapper>
);
