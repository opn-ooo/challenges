import { createAsyncThunk } from '@reduxjs/toolkit';
import { MODULE_NAMESPACE } from '@/constants';
import { paymentsService } from '@/api';
import { summaryDonations } from '@/helpers';

export const fetchDonationList = createAsyncThunk(
  `${MODULE_NAMESPACE.DONATIONS}/fetch`,
  async (_, ThunkSerivce) => {
    try {
      const data = await paymentsService?.fetchAll();
      return summaryDonations(data?.map((item) => item?.amount));
    } catch (error) {
      return ThunkSerivce?.rejectWithValue(error?.response);
    }
  }
);

export const donationToCharities = createAsyncThunk(
  `${MODULE_NAMESPACE.DONATIONS}/donations`,
  async (payload, ThunkSerivce) => {
    try {
      const data = await paymentsService?.updatePayment(payload);
      return data;
    } catch (error) {
      return ThunkSerivce?.rejectWithValue(error?.response);
    }
  }
);
