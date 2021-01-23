import { combineReducers } from 'redux'
import donationSlice from './donation/donationSlice'

export default combineReducers({
    donation: donationSlice.reducer,
})
