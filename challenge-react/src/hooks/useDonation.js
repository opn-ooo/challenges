import { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { donationTotalAmountSelector, donationActiveCurrencySelector, donationErrorMessageSelector } from '~modules/donation/donationSelector'
import donationAction from '~modules/donation/donationAction'

function useDonation() {
    const dispatch = useDispatch()
    const [submittingPayment, setSubmitting] = useState(false)

    const totalAmount = useSelector(donationTotalAmountSelector)
    const activeCurrency = useSelector(donationActiveCurrencySelector)
    const errorMessage = useSelector(donationErrorMessageSelector)

    const donationAmount = useMemo(() => totalAmount[activeCurrency] || 0, [totalAmount, activeCurrency])

    function fetchPayment() {
        return dispatch(donationAction.fetchPayment())
    }

    async function submitPayment(data) {
        try {
            setSubmitting(true)

            await dispatch(donationAction.submitPayment(data))
            await fetchPayment()
        } finally {
            setSubmitting(false)
        }
    }

    return {
        donationAmount,
        activeCurrency,
        errorMessage,

        fetchPayment,

        submittingPayment,
        submitPayment,
    }
}

export default useDonation
