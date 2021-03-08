import { createGlobalStyle } from 'styled-components';
const pxToVw = (size, width = 1440) => `${(size / width) * 100}vw`;
import { normalize } from 'styled-normalize';

export const Global = createGlobalStyle((theme) => {
  return `
  ${normalize}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
    font-family: 'Open Sans', sans-serif;
      font-size: ${pxToVw(24)};
      @media (min-width: 768px) {
        font-size: ${pxToVw(18)};
      }
      @media (min-width: 1024px) {
        font-size: ${pxToVw(16)};
      }
    }
`;
});

export default Global;
