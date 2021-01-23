import { createSlice } from '@reduxjs/toolkit'

import { MODULE_NAME } from '~constants/redux'
import { fetchCharities } from './charityAction'

const charitySlice = createSlice({
    name: MODULE_NAME.charity,
    initialState: {
        data: {
            charities: [],
        },
        status: 'idle',
    },
    extraReducers: {
        [fetchCharities.pending]: (state) => {
            state.status = 'loading'
        },
        [fetchCharities.fulfilled]: (state, action) => {
            state.data.charities = action.payload
            state.status = 'success'
        },
        [fetchCharities.rejected]: (state) => {
            state.status = 'failure'
        },
    },
})

export default charitySlice
