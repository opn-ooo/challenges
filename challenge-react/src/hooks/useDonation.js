import { useDispatch, useSelector } from 'react-redux'

import { donationAmountSelector, donationMessageSelector } from '~modules/donation/donationSelector'
import donationAction from '~modules/donation/donationAction'

function useDonation() {
    const dispatch = useDispatch()

    const donationAmount = useSelector(donationAmountSelector)
    const donationMessage = useSelector(donationMessageSelector)

    function submitPayment(data) {
        dispatch(donationAction.submitPayment(data))
    }

    function fetchPayment() {
        dispatch(donationAction.fetchPayment())
    }

    return {
        donationAmount,
        donationMessage,

        fetchPayment,
        submitPayment,
    }
}

export default useDonation
