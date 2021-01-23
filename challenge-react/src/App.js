import React, { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'

import CharityCard from '~components/CharityCard'
import GlobalStyle from '~components/GlobalStyle'
import useDonation from '~hooks/useDonation'
import useTheme from '~hooks/useTheme'
import useCharity from '~hooks/useCharity'

function App() {
    const theme = useTheme()
    const { charities, fetchCharities } = useCharity()
    const { submitPayment, fetchPayment, donationAmount, donationMessage } = useDonation()

    useEffect(() => {
        fetchCharities()
        fetchPayment()
    }, [])

    const style = {
        color: 'red',
        margin: '1em 0',
        fontWeight: 'bold',
        fontSize: '16px',
        textAlign: 'center',
    }

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <div>
                <h1>Tamboon React</h1>
                <p>All donations: {donationAmount}</p>
                <p style={style}>{donationMessage}</p>
                {charities.map(value => (
                    <CharityCard
                        key={value.id}
                        name={value.name}
                        onSubmit={amount => submitPayment({ amount, id: item.id, currency: item.currency })} />
                ))}
            </div>
        </ThemeProvider>
    )
}

export default App
