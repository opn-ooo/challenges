import React, { useState, useEffect } from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import { AttachMoney } from '@styled-icons/material'
import classNames from 'classnames'

import Container from '~components/Container'
import ToggleDarkMode from '~components/ToggleDarkMode'
import Box from '~components/Box'
import Text from '~components/Text'
import useDonation from '~hooks/useDonation'
import { DonationAmount } from './Header.styled'

function Header() {
    const { donationAmount, activeCurrency } = useDonation()
    const [animation, setAnimation] = useState(false)
    const match = useRouteMatch({
        path: '/',
        exact: true,
    })

    useEffect(() => {
        if (donationAmount > 0) {
            setAnimation(true)
        }

        const removeAnimationTask = setTimeout(() => setAnimation(false), 800)

        return () => {
            clearTimeout(removeAnimationTask)
        }
    }, [donationAmount])

    return (
        <Container
            as="header"
            className="header"
            position="fixed"
            width="100%"
            bg="backgroundColor"
            zIndex="5"
            top="0"
            left="0"
            right="0">
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
                            <DonationAmount
                                className={classNames({
                                    animation,
                                })}
                                mr="1rem"
                                fontSize="1.375rem"
                                title="Total donations">
                                {`${donationAmount.toLocaleString()} ${activeCurrency}`}
                            </DonationAmount>
                        </>
                    )}
                    <ToggleDarkMode/>
                </Box>
            </Box>
        </Container>
    )
}

export default Header
