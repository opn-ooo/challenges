
import React, { useEffect } from 'react'

import CharityCard from '~components/CharityCard'
import Container from '~components/Container'
import Text from '~components/Text'
import Box from '~components/Box'
import useDonation from '~hooks/useDonation'
import useCharity from '~hooks/useCharity'

function Home() {
    const { charities, fetchCharities } = useCharity()
    const { submitPayment, fetchPayment, donationAmount, donationMessage } = useDonation()

    useEffect(() => {
        fetchCharities()
        fetchPayment()
    }, [])

    return (
        <Container className="home">
            <Text>All donations: {donationAmount}</Text>
            <Text
                textAlign="center"
                mx="1em"
                my="0"
                fontWeight="bold"
                fontSize="16px">
                {donationMessage}
            </Text>
            <Box display="flex" flexWrap="wrap" mx="-15px">
                {charities.map(value => (
                    <Box
                        width={[1, null, 0.5, null, 1/3]}
                        px="15px"
                        py="10px"
                        key={value.id}>
                        <CharityCard
                            currency={value.currency}
                            name={value.name}
                            image={value.image}
                            onSubmit={amount => submitPayment({ amount, id: value.id, currency: value.currency })} />
                    </Box>
                ))}
            </Box>
        </Container>
    )
}

export default Home
