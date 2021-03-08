import styled from 'styled-components';
import { px2vw } from '@/utils';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: ${px2vw(80)};
  max-width: 100%;
`;
