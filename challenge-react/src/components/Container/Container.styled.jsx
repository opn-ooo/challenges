import styled from 'styled-components';
import { pxToVw } from '@/helpers';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: ${pxToVw(80)};
  max-width: 100%;
`;
