import styled from 'styled-components';
import { pxToVw } from '@/helpers';

export const Card = styled.div`
  display: flex;
  border-radius: 4px;
  box-shadow: 2px 2px 2px 2px #e2e2e2;
  width: ${pxToVw(320, 320)};
  min-height: ${pxToVw(200, 320)};
  flex-direction: column;
  position: relative;
  margin: ${pxToVw(20)};
  height: 100%;
  @media (min-width: 768px) {
    width: ${pxToVw(320, 768)};
    min-height: ${pxToVw(200, 768)};
    height: 100%;
  }
  @media (min-width: 1024px) {
    width: ${pxToVw(400)};
    min-height: ${pxToVw(300)};
    height: 100%;
  }
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  margin: 20px;
  align-items: center;
`;

export const CardLoading = styled.div`
  display: flex;
  width: ${pxToVw(320, 320)};
  min-height: ${pxToVw(200, 320)};
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  margin: ${pxToVw(20)};
  height: 100%;
  @media (min-width: 768px) {
    width: ${pxToVw(320, 768)};
    min-height: ${pxToVw(200, 768)};
    height: 100%;
  }
  @media (min-width: 1024px) {
    width: ${pxToVw(400)};
    min-height: ${pxToVw(300)};
    height: 100%;
  }
`;
