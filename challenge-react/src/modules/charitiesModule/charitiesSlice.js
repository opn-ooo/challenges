import { createSlice } from '@reduxjs/toolkit';

export const charitiesSlice = createSlice({
  name: 'CHARITIES_MODULE',
  initialState: {
    data: {
      totalAmount: {},
      successMessage: null,
      errorMessage: null,
    },
    status: 'idle',
  },
});
