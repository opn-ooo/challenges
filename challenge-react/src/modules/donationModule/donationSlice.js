import { createSlice } from '@reduxjs/toolkit';
import { fetchDonationList, donationToCharities } from './donationAction';

export const donationSlice = createSlice({
  name: 'DONATION_MODULE',
  initialState: {
    data: {
      amount: 0,
      errorMessage: null,
      successMessage: null,
      isLoading: false,
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDonationList.fulfilled, (state, action) => {
        state.data.amount = action?.payload;
      })
      .addCase(donationToCharities.fulfilled, (state, action) => {
        state.data.isLoading = false;
      })
      .addCase(donationToCharities.rejected, (state, action) => {
        state.data.isLoading = false;
        state.data.errorMessage = action?.payload?.statusText;
      })
      .addCase(donationToCharities.pending, (state) => {
        state.data.isLoading = true;
      });
  },
});
