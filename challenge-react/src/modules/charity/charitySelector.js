import { createSelector } from '@reduxjs/toolkit'

export const charitySelector = state => state.charity

export const charityDataSelector = createSelector(
    charitySelector,
    state => state.data
)

export const charitiesSelector = createSelector(
    charityDataSelector,
    data => data.charities
)
