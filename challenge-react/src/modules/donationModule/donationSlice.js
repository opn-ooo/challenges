import { createSlice } from '@reduxjs/toolkit';

export const donationSlice = createSlice({
  name: 'DONATION_MODULE',
  initialState: {
    data: {
      charitiesList: [],
    },
    status: 'idle',
  },
});
