import React, { Component, useEffect, useState } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { summaryDonations } from './helpers'
import { get } from './apis'
import { DEFAULT_PAYMENTS } from './constants/payment'
import { Currency, CharityType, PaymentType, ResponseCharities, ResponsePayment } from './types/response'

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
// const handlePay = (id: number, amount: number, currency: Currency) => {}

const Card = styled.div`
  margin: 10px;
  border: 1px solid #ccc;
`;

const StyledMessage = styled.p`
  color: 'red',
  margin: '1em 0',
  fontWeight: 'bold',
  fontSize: '16px',
  textAlign: 'center',
`

export const App: React.FC = () => {
  const [charities, setcCharities] = useState<CharityType[]>([])
  const [selectedAmount, setSelectedAmount] = useState(10)
  const [donate, setDonate] = useState(0)

  useEffect(() => {
    (async () => {
      const [charities, payments] = await Promise.all([
        get('/charities'),
        get('/payments'),
      ])
      if (charities) {
        setcCharities(charities)
      }
      if (payments) {
        setDonate(summaryDonations(payments.map((payment: PaymentType) => {payment.amount})))
      }
    })()
  }, [])

  const cards = charities.map(function (item, i) {
    const payments = DEFAULT_PAYMENTS.map((amount, j) => (
      <label key={j}>
        <input
          type="radio"
          name="payment"
          onChange={function () {
            setSelectedAmount(amount);
          }}
        />
        {amount}
      </label>
    ))

    return (
      <Card key={i}>
        <p>{item.name}</p>
        {payments}
        <button
          // onClick={()=> handlePay(
          //   item.id,
          //   selectedAmount,
          //   item.currency
          // )}
        >
          Pay
        </button>
      </Card>
    )
  })

  return (
    <div>
      <h1>Tamboon React</h1>
      <p>All donations: {donate}</p>
      <StyledMessage>message</StyledMessage>
      {cards}
    </div>
  )
}