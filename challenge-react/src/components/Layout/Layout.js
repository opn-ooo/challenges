import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import GlobalStyle from '~components/GlobalStyle'
import Header from '~components/Header'
import Box from '~components/Box'

function Layout({ children }) {
    return (
        <>
            <Helmet>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap" rel="stylesheet" />
            </Helmet>
            <GlobalStyle />
            <Header />
            <Box as="main" pt="72px">
                {children}
            </Box>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
