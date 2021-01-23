import { createSelector } from '@reduxjs/toolkit'

export const donationSelector = state => state.donation

export const donationDataSelector = createSelector(
    donationSelector,
    state => state.data
)

export const donationAmountSelector = createSelector(
    donationDataSelector,
    data => data.amount
)

export const donationMessageSelector = createSelector(
    donationDataSelector,
    data => data.message
)
