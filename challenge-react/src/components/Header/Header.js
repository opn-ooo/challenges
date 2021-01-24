import React from 'react'
import { Link } from 'react-router-dom'

import Container from '~components/Container'
import ToggleDarkMode from '~components/ToggleDarkMode'
import Box from '~components/Box'
import Text from '~components/Text'

function Header() {
    return (
        <header className="header">
            <Container>
                <Box display="flex" minHeight="72px" alignItems="center">
                    <Box
                        width={[null, null, null, 1/3]}
                        display={['none', null, null, 'block']}/>
                    <Box width={[0.5, null, null, 1/3]}>
                        <Text
                            as="h2"
                            m="0"
                            textAlign={[null, null, null, 'center']}>
                            <Link to="/">
                                Tamboon React
                            </Link>
                        </Text>
                    </Box>
                    <Box
                        width={[0.5, null, null, 1/3]}
                        display="flex"
                        alignItems="center"
                        justifyContent="flex-end">
                        <ToggleDarkMode/>
                    </Box>
                </Box>
            </Container>
        </header>
    )
}

export default Header
