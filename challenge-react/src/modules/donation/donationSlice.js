import { createSlice } from '@reduxjs/toolkit'

import { MODULE_NAME } from '~constants/redux'
import CHARITY from '~constants/charity'
import { isPendingAction, isFulFilledAction, isRejectedAction } from '~helpers/redux'
import { fetchPayment, submitPayment } from './donationAction'

const donationSlice = createSlice({
    name: MODULE_NAME.donation,
    initialState: {
        data: {
            activeCurrency: CHARITY.activeCurrency,
            totalAmount: {},
            errorMessage: null,
        },
        status: 'idle',
    },
    extraReducers: builder => {
        builder
            .addCase(fetchPayment.fulfilled, (state, action) => {
                state.data.totalAmount = action.payload
            })
            .addCase(submitPayment.fulfilled, (state, action) => {
                state.data.amount = state.data.amount + action.payload
            })
            .addMatcher(isPendingAction(MODULE_NAME.donation), (state) => {
                state.status = 'loading'
                state.data.errorMessage = null
            })
            .addMatcher(isFulFilledAction(MODULE_NAME.donation), (state) => {
                state.status = 'success'
            })
            .addMatcher(isRejectedAction(MODULE_NAME.donation), (state, action) => {
                state.status = 'failure'
                state.data.errorMessage = action.error.message
            })
    },
})

export default donationSlice
