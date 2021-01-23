import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import useDonation from '~hooks/useDonation'
import useCharity from '~hooks/useCharity'

const Card = styled.div`
  margin: 10px;
  border: 1px solid #ccc;
`

function App() {
    const [selectedAmount, setSelectedAmount] = useState([])

    const { charities, fetchCharities } = useCharity()
    const { submitPayment, fetchPayment, donationAmount, donationMessage } = useDonation()

    useEffect(() => {
        fetchCharities()
        fetchPayment()
    }, [])

    const cards = charities.map(function (item, i) {
        const payments = [10, 20, 50, 100, 500].map((amount, j) => (
            <label key={j}>
                <input
                    type="radio"
                    name="payment"
                    onClick={() => setSelectedAmount(amount)}
                />
                {amount}
            </label>
        ))

        return (
            <Card key={i}>
                <p>{item.name}</p>
                {payments}
                <button onClick={() => submitPayment({ id: item.id, amount: selectedAmount, currency: item.currency })}>
                    Pay
                </button>
            </Card>
        )
    })
    const style = {
        color: 'red',
        margin: '1em 0',
        fontWeight: 'bold',
        fontSize: '16px',
        textAlign: 'center',
    }

    return (
        <div>
            <h1>Tamboon React</h1>
            <p>All donations: {donationAmount}</p>
            <p style={style}>{donationMessage}</p>
            {cards}
        </div>
    )
}

export default App
