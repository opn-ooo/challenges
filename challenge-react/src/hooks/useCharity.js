import { useSelector, useDispatch } from 'react-redux'

import charityAction from '~modules/charity/charityAction'
import { charitiesSelector, charityStatusSelector } from '~modules/charity/charitySelector'

function useCharity() {
    const dispatch = useDispatch()
    const charities = useSelector(charitiesSelector)
    const status = useSelector(charityStatusSelector)

    function fetchCharities() {
        dispatch(charityAction.fetchCharities())
    }

    return {
        fetchCharities,
        charities,
        status,
    }
}

export default useCharity
