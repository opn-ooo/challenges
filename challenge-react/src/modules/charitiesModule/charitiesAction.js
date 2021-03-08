import { createAsyncThunk } from '@reduxjs/toolkit';
import { MODULE_NAMESPACE } from '@/constants';
import { charitiesService } from '@/api';

export const fetchCharitiesList = createAsyncThunk(
  `${MODULE_NAMESPACE.CHARITIES}/fetch`,
  async (_, ThunkSerivce) => {
    try {
      const data = await charitiesService?.fetchAll();
      return data;
    } catch (error) {
      return ThunkSerivce?.rejectWithValue(error?.response);
    }
  }
);
