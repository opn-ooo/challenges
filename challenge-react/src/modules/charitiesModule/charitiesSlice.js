import { createSlice } from '@reduxjs/toolkit';
import { MODULE_NAMESPACE, STATUS_MESSAGE } from '@/constants';
import { fetchCharitiesList } from './charitiesAction';

export const charitiesSlice = createSlice({
  name: MODULE_NAMESPACE.CHARITIES,
  initialState: {
    data: {
      charitiesList: [],
      errorMessage: null,
    },
    status: 'IDLE',
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharitiesList.fulfilled, (state, action) => {
        state.data.charitiesList = action?.payload;
      })
      .addCase(fetchCharitiesList.rejected, (state, action) => {
        state.status = STATUS_MESSAGE.FAILED;
        state.data.errorMessage = action?.payload?.statusText;
      })
      .addCase(fetchCharitiesList.pending, (state) => {
        state.status = STATUS_MESSAGE.LOADING;
      });
  },
});
