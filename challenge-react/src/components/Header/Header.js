import React from 'react'

import Container from '~components/Container'
import ToggleDarkMode from '~components/ToggleDarkMode'
import Box from '~components/Box'
import Text from '~components/Text'

function Header() {
    return (
        <header>
            <Container>
                <Box display="flex">
                    <Box
                        width={[null, null, null, 1/3]}
                        display={['none', null, null, 'block']}/>
                    <Text
                        as="h2"
                        width={[0.5, null, null, 1/3]}
                        textAlign={[null, null, null, 'center']}>
                        Tamboon React
                    </Text>
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
