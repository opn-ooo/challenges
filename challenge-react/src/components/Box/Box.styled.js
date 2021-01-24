import styled from 'styled-components'
import { compose, flexbox, typography, space, layout, color, border, position } from 'styled-system'

export default styled.div`
    ${compose(flexbox, typography, space, layout, color, border, position)}
`
