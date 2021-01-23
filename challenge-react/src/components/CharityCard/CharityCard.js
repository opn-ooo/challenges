import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import CHARITY from '~constants/charity'

const Card = styled.div`
    border: 1px solid #ccc;
`

function CharityCard({ name, image, disabled, onSubmit }) {
    const [selectedAmount, setSelectedAmount] = useState(null)

    const payments = CHARITY.paymentOptions.map((value) => (
        <label key={value}>
            <input
                type="radio"
                name="payment"
                onClick={() => setSelectedAmount(value)}
            />
            {value}
        </label>
    ))

    return (
        <Card>
            <p>{name}</p>
            <img src={image} alt={name} width="300"/>
            {payments}
            <button
                onClick={() => onSubmit(selectedAmount)}
                disabled={!selectedAmount || disabled}>
                Pay
            </button>
        </Card>
    )
}

CharityCard.defaultProps = {
    loading: false,
    disabled: false,
}

CharityCard.propTypes = {
    name: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
    image: PropTypes.string,
    loading: PropTypes.bool,
    disabled: PropTypes.bool,
}

export default CharityCard
