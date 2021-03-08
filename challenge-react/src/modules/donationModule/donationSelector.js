import { createSelector } from '@reduxjs/toolkit';

export const donationDefaultSelector = (state) => state?.donationModule;

const donationDataSelector = createSelector(
  donationDefaultSelector,
  (data) => data?.data
);

export const donationAmountSelector = createSelector(
  donationDataSelector,
  (data) => data?.amount
);

export const errorSelector = createSelector(
  donationDataSelector,
  (data) => data.errorMessage
);

export const successSelector = createSelector(
  donationDataSelector,
  (data) => data.successMessage
);

export const loadingSelector = createSelector(
  donationDataSelector,
  (data) => data?.isLoading
);
