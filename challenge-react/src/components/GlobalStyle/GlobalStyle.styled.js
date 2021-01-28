import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export default createGlobalStyle(({theme}) => `
    ${normalize}

    * {
        box-sizing: border-box;
    }

    html,
    body {
        width: 100%;
        height: 100%;
        font-family: ${theme.font.family};
    }

    body {
        font-size: 16px;
        color: ${theme.colors.textColor};
        background-color: ${theme.colors.backgroundColor};
        overflow-x: hidden;
        transition: all .2s;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    #ct-container .ct-toast {
        color: ${theme.colors.textColor};
        background-color:  ${theme.colors.foregroundColor};
    }

    :root {
        --background-color: #f2f6f9;
        --foreground-color: #fafafa;
        --border-color: #04070D;
        --text-color: #04070D;
        --cta-color: #33a8e8;
        --cta-text-color: #fff;
    }

    .dark-mode {
        --background-color: #333;
        --foreground-color: #48484a;
        --border-color: #fff;
        --text-color: #fff;
        --cta-color: #448cff;
        --cta-text-color: #fff;
    }
`)
