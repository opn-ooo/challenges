import { createSlice } from '@reduxjs/toolkit'

import { MODULE_NAME } from '~constants/redux'
import { isPendingAction, isFulFilledAction, isRejectedAction } from '~helpers/redux'
import { fetchCharities } from './charityAction'

const charitySlice = createSlice({
    name: MODULE_NAME.charity,
    initialState: {
        data: {
            charities: [],
        },
        status: 'idle',
    },
    extraReducers: builder => {
        builder
            .addCase(fetchCharities.fulfilled, (state, action) => {
                state.data.charities = action.payload
            })
            .addMatcher(isPendingAction(MODULE_NAME.charity), (state) => {
                state.status = 'loading'
            })
            .addMatcher(isFulFilledAction(MODULE_NAME.charity), (state) => {
                state.status = 'success'
            })
            .addMatcher(isRejectedAction(MODULE_NAME.charity), (state) => {
                state.status = 'failure'
            })
    },
})

export default charitySlice
