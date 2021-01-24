import styled from 'styled-components'

import Text from '~components/Text'
import { Shake } from '~components/GlobalStyle'

export const DonationAmount = styled(Text)`
    transition: font 0.3s ease;

    &.animation {
        color: red;
        animation: 3s ${Shake} ease-out;
    }
`
