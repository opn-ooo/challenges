import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import paymentAPI from '~api/payment'
import charityAPI from '~api/charity'
import useDonation from '~hooks/useDonation'
import { summaryDonations } from '~helpers/donation'

const Card = styled.div`
  margin: 10px;
  border: 1px solid #ccc;
`

function App() {
    const [charities, setCharities] = useState([])
    const [selectedAmount, setSelectedAmount] = useState([])

    const { addAmount, donationAmount, donationMessage } = useDonation()

    useEffect(() => {
        charityAPI.getAll()
            .then(data => setCharities(data))

        paymentAPI.getAll()
            .then(data => {
                const totalAmount = summaryDonations(data.map((item) => item.amount))
                addAmount(totalAmount)
            })
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
                <button
                    onClick={handlePay.call(self, item.id, selectedAmount, item.currency)}
                >
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

/**
 * Handle pay button
 * 
 * @param {*} The charities Id
 * @param {*} amount The amount was selected
 * @param {*} currency The currency
 * 
 * @example
 * fetch('http://localhost:3001/payments', {
      method: 'POST',
      body: `{ "charitiesId": ${id}, "amount": ${amount}, "currency": "${currency}" }`,
    })
 */
function handlePay(id, amount, currency) {}
