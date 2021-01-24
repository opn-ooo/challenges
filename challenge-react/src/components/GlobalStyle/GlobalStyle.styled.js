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

    :root {
        --background-color: #fff;
        --border-color: #04070D;
        --text-color: #04070D;
    }

    .dark-mode {
        --background-color: #333;
        --border-color: #333;
        --text-color: #fff;
    }
`)
