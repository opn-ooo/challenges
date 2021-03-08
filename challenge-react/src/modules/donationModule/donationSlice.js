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
        state.data.errorMessage = null;
      })
      .addCase(fetchDonationList.rejected, (state, action) => {
        state.data.errorMessage = 'Cannot get Amount for Donated';
      })
      .addCase(donationToCharities.fulfilled, (state, action) => {
        state.data.successMessage = 'Donated success';
        state.data.isLoading = false;
      })
      .addCase(donationToCharities.rejected, (state, action) => {
        state.data.errorMessage = 'Dotated failed';
        state.data.isLoading = false;
      })
      .addCase(donationToCharities.pending, (state) => {
        state.data.isLoading = true;
      });
  },
});
