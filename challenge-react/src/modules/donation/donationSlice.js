import { createSlice } from '@reduxjs/toolkit'

import { MODULE_NAME } from '~constants/redux'
import { setMessage, fetchPayment, submitPayment } from './donationAction'

const donationSlice = createSlice({
    name: MODULE_NAME.donation,
    initialState: {
        data: {
            amount: 0,
            message: null,
        },
        status: 'idle',
    },
    extraReducers: {
        [setMessage]: (state, action) => {
            state.data.message = action.payload
        },

        [fetchPayment.pending]: (state) => {
            state.status = 'loading'
        },
        [fetchPayment.fulfilled]: (state, action) => {
            state.data.amount = action.payload
            state.status = 'success'
        },
        [fetchPayment.rejected]: (state) => {
            state.status = 'failure'
        },

        [submitPayment.pending]: (state) => {
            state.status = 'loading'
        },
        [submitPayment.fulfilled]: (state, action) => {
            state.data.amount = state.data.amount + action.payload
            state.status = 'success'
        },
        [submitPayment.rejected]: (state) => {
            state.status = 'failure'
        },
    },
})

export default donationSlice
