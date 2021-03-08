import { axiosInstance } from '@/helpers';
import { API } from '@/constants';

export const paymentsService = (() => {
  const fetchAll = () =>
    axiosInstance.get(API.PAYMENTS).then((res) => res?.data);
  const updatePayment = (payload) =>
    axiosInstance.post(API.PAYMENTS, payload).then((res) => res?.data);
  return {
    fetchAll,
    updatePayment,
  };
})();
