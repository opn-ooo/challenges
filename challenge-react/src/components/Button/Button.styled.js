import styled from 'styled-components'
import { variant, space } from 'styled-system'

export default styled.button`
    cursor: pointer;
    color: inherit;
    padding: 0.5em 1em;

    ${space}
    ${variant({
        variants: {
            primary: {
                color: 'var(--border-color)',
                bg: 'transparent',
                borderWidth: '1px',
                '&:hover': {
                    bg: 'var(--border-color)',
                    color: 'var(--background-color)',
                },
            },
            transparent: {
                color: 'inherit',
                bg: 'transparent',
                border: 'none',
            },
        },
    })}
`
