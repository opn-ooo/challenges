import { createGlobalStyle } from 'styled-components';
const px2vw = (size, width = 1440) => `${(size / width) * 100}vw`;
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
      font-size: ${px2vw(24)};
      @media (min-width: 768px) {
        font-size: ${px2vw(18)};
      }
      @media (min-width: 1024px) {
        font-size: ${px2vw(16)};
      }
    }
`;
});

export default Global;
