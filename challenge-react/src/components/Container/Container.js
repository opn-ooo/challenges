import React from 'react'
import PropTypes from 'prop-types'

import Box from '~components/Box'

function Container({ children, ...restProps }) {
    return (
        <Box
            width="100%"
            mx="auto"
            px="15px"
            maxWidth={['100%', '540px', '720px', '960px', '1140px', '1320px']}
            {...restProps}>
            {children}
        </Box>
    )
}

Container.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Container
