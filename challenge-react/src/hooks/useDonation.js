import { useDispatch, useSelector } from 'react-redux'

import { donationAmountSelector, donationMessageSelector } from '~modules/donation/donationSelector'
import { donationAction } from '~modules/donation/donationSlice'

function useDonation() {
    const dispatch = useDispatch()

    const donationAmount = useSelector(donationAmountSelector)
    const donationMessage = useSelector(donationMessageSelector)

    function addAmount(amount) {
        dispatch(donationAction.addAmount(amount))
    }

    return {
        donationAmount,
        donationMessage,

        addAmount,
    }
}

export default useDonation
