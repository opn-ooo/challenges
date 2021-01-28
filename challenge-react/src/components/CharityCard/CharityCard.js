import React, { useState, useCallback, useMemo } from 'react'
import PropTypes from 'prop-types'

import Box from '~components/Box'
import Text from '~components/Text'
import Button from '~components/Button'
import Select from '~components/Select'
import CHARITY from '~constants/charity'

const DEFAULT_STATE = {
    selectedAmount: '',
}

function CharityCard({ name, image, currency, disabled, onSubmit }) {
    const [selectedAmount, setSelectedAmount] = useState(DEFAULT_STATE.selectedAmount)
    const options = CHARITY.paymentOptions.map(value => ({
        value,
        label: `${value} ${currency}`,
    }))

    const handleSubmit = useCallback(async () => {
        await onSubmit(selectedAmount.value)
        setSelectedAmount(DEFAULT_STATE.selectedAmount)
    }, [selectedAmount])
    const isDisabled = useMemo(() => !selectedAmount || disabled, [selectedAmount, disabled])

    return (
        <Box bg="foregroundColor">
            <Box px="1rem" pt="1rem" pb="0.5rem">
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    mb="1rem"
                    height={['auto', '250px']}>
                    <img
                        src={image}
                        alt={name}
                        style={{maxWidth: '100%', maxHeight: '100%'}} />
                </Box>
                <Text as="h3" mt="0">
                    {name}
                </Text>
                <Box display="flex" flexWrap="wrap" mx="-10px">
                    <Box width={[1, 0.7]} mb="1rem" px="10px">
                        <Select
                            value={selectedAmount}
                            onChange={setSelectedAmount}
                            options={options}
                        />
                    </Box>
                    <Box width={[1, 0.3]} mb="1rem" px="10px">
                        <Button
                            variant="primary"
                            width="100%"
                            onClick={handleSubmit}
                            disabled={isDisabled}>
                            Donate
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

CharityCard.defaultProps = {
    loading: false,
    disabled: false,
}

CharityCard.propTypes = {
    name: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
    currency: PropTypes.string.isRequired,
    image: PropTypes.string,
    disabled: PropTypes.bool,
}

export default CharityCard
