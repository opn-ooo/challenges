import React from 'react';
import styled from 'styled-components';

const HeaderStyled = styled.header`
  text-align: center;
`;

const AppHeader = () => {
  return (
    <HeaderStyled>
      <h1>Omise Tamboon React</h1>
    </HeaderStyled>
  );
};

export default AppHeader;
