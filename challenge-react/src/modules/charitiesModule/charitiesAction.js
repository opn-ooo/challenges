import { createAsyncThunk } from '@reduxjs/toolkit';
import { MODULE_NAMESPACE } from '@/constants';
import { charitiesService } from '@/api';

export const fetchCharitiesList = createAsyncThunk(
  `${MODULE_NAMESPACE.CHARITIES}/fetch`,
  async (_, thunkAPI) => {
    try {
      const data = await charitiesService?.fetchAll();
      return data;
    } catch (error) {
      coonsole.error(error?.response);
      return thunkAPI?.rejectWithValue(error?.response);
    }
  }
);
