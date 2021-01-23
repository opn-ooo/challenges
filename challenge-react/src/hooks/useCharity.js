import { useSelector, useDispatch } from 'react-redux'
import charityAction from '~modules/charity/charityAction'
import { charitiesSelector } from '~modules/charity/charitySelector'

function useCharity() {
    const dispatch = useDispatch()
    const charities = useSelector(charitiesSelector)

    function fetchCharities() {
        dispatch(charityAction.fetchCharities())
    }

    return {
        fetchCharities,
        charities,
    }
}

export default useCharity
