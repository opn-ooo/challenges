import { useDispatch, useSelector } from 'react-redux';
import {
  fetchDonationList,
  donationToCharities,
  donationAmountSelector,
  errorSelector,
  loadingSelector,
} from '@/modules/donationModule';
export const useDonationHook = () => {
  const dispatch = useDispatch();
  const amount = useSelector(donationAmountSelector);
  const errorMessage = useSelector(errorSelector);
  const isLoading = useSelector(loadingSelector);
  async function fetchAmount() {
    await dispatch(fetchDonationList());
  }

  async function donate(payload) {
    await dispatch(donationToCharities(payload));
    await fetchAmount();
  }

  return {
    amount,
    errorMessage,
    isLoading,
    donate,
    fetchAmount,
  };
};
