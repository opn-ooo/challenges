import styled from 'styled-components'
import Select from 'react-select'

export default styled(Select)`
    .react-select__control {
        cursor: pointer;
        border-color: var(--border-color);
        background-color: var(--foreground-color);
    }

    .react-select__indicator-separator {
        display: none;
    }

    .react-select__single-value,
    .react-select__placeholder {
        color: var(--text-color);
    }

    .react-select__placeholder {
        opacity: 0.5;
    }

    .react-select__menu {
        background-color: var(--background-color);
    }

    .react-select__option {
        cursor: pointer;
    }

    .react-select__option--is-focused {
        background-color: var(--cta-color);
        color: var(--cta-text-color);
    }
`
