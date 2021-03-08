import { createSelector } from '@reduxjs/toolkit';

export const charitiesDefaultSelector = (state) => state?.charitiesModule;

const charitiesDataSelector = createSelector(
  charitiesDefaultSelector,
  (data) => data?.data
);

export const charitiesSelector = createSelector(
  charitiesDataSelector,
  (data) => data?.charitiesList
);

export const errorSelector = createSelector(
  charitiesDataSelector,
  (data) => data.errorMessage
);

export const statusSelector = createSelector(
  charitiesDefaultSelector,
  data => data?.status
)