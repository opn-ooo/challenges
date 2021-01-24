
import React, { useEffect } from 'react'

import CharityCard, { CharityCardLoader } from '~components/CharityCard'
import Container from '~components/Container'
import Box from '~components/Box'
import useDonation from '~hooks/useDonation'
import useCharity from '~hooks/useCharity'

function Home() {
    const { charities, fetchCharities, status } = useCharity()
    const { submittingPayment, submitPayment, fetchPayment } = useDonation()

    useEffect(() => {
        fetchCharities()
        fetchPayment()
    }, [])

    return (
        <Container className="home">
            <Box display="flex" flexWrap="wrap" mx="-15px">
                {status !== 'success' && (
                    <Box
                        width={[1, null, 0.5, null, 1/3]}
                        px="15px"
                        py="10px">
                        <CharityCardLoader />
                    </Box>
                )}
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
                            disabled={submittingPayment}
                            onSubmit={amount => submitPayment({ amount, id: value.id, currency: value.currency })} />
                    </Box>
                ))}
            </Box>
        </Container>
    )
}

export default Home
