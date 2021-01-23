import { createSlice } from '@reduxjs/toolkit'

const donationSlice = createSlice({
    name: 'donation',
    initialState: {
        data: {
            amount: 0,
            message: null,
        },
        status: 'idle',
    },
    reducers: {
        addAmount: (state, action) => {
            state.data.amount = state.data.amount + action.payload
        },
        setMessage: (state, action) => {
            state.data.message = action.payload
        },
    },
})

export const donationAction = donationSlice.actions

export default donationSlice
