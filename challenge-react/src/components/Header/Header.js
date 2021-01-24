import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import { AttachMoney } from '@styled-icons/material'

import Container from '~components/Container'
import ToggleDarkMode from '~components/ToggleDarkMode'
import Box from '~components/Box'
import Text from '~components/Text'
import useDonation from '~hooks/useDonation'

function Header() {
    const { donationAmount, activeCurrency } = useDonation()
    const match = useRouteMatch({
        path: '/',
        exact: true,
    })

    return (
        <Container as="header" className="header">
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
                    {match && (
                        <>
                            <AttachMoney width="27px" />
                            <Text
                                mr="1rem"
                                fontSize="1.375rem"
                                title="Total donations">
                                {`${donationAmount.toLocaleString()} ${activeCurrency}`}
                            </Text>
                        </>
                    )}
                    <ToggleDarkMode/>
                </Box>
            </Box>
        </Container>
    )
}

export default Header
