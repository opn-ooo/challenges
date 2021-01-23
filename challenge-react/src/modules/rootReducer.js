import { combineReducers } from 'redux'
import donationSlice from './donation/donationSlice'
import charitySlice from './charity/charitySlice'

export default combineReducers({
    donation: donationSlice.reducer,
    charity: charitySlice.reducer,
})
