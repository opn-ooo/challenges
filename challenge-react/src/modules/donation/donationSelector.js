import { createSelector } from '@reduxjs/toolkit'

export const donationSelector = state => state.donation

export const donationDataSelector = createSelector(
    donationSelector,
    state => state.data
)

export const donationTotalAmountSelector = createSelector(
    donationDataSelector,
    data => data.totalAmount
) 

export const donationActiveCurrencySelector = createSelector(
    donationDataSelector,
    data => data.activeCurrency
) 

export const donationErrorMessageSelector = createSelector(
    donationDataSelector,
    data => data.errorMessage
)
