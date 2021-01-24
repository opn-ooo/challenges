import styled from 'styled-components'
import { compose, variant, space, layout } from 'styled-system'

export default styled.button`
    cursor: pointer;
    color: inherit;
    padding: 0.5em 1em;
    transition: all .3s;
    border: none;
    text-overflow: ellipsis;
    overflow-x: hidden;

    ${compose(space, layout)}
    ${variant({
        variants: {
            primary: {
                minHeight: '38px',
                color: 'var(--cta-text-color)',
                bg: 'var(--cta-color)',
                borderRadius: '4px',
                '&:hover': {
                    opacity: 0.7,
                },
                '&:disabled': {
                    opacity: 0.4,
                    cursor: 'not-allowed',
                },
            },
            transparent: {
                color: 'inherit',
                bg: 'transparent',
            },
        },
    })}
`
