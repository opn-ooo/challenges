import styled from 'styled-components';

export const FormWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  font-size: 2rem;
  @media (min-width: 768px) {
    font-size: 1.4rem;
  }
  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormSubmitWrapper = styled.div`
  margin: 20px;
`;

export const RadioWrapper = styled.label`
  margin-right: 5px;
`;
