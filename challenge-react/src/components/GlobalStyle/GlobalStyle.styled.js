import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export default createGlobalStyle(({theme}) => `
    ${normalize}

    html,
    body {
        width: 100%;
        height: 100%;
    }

    body {
        color: ${theme.colors.textColor};
        background-color: ${theme.colors.backgroundColor};
    }
`)
