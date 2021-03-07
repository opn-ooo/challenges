import { combineReducers } from 'redux';
import { donationSlice } from './donationModule';
import { charitiesSlice } from './charitiesModule';

export default combineReducers({
  donationModule: donationSlice.reducer,
  charitiesModule: charitiesSlice.reducer,
});
