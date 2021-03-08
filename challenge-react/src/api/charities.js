import { axiosInstance } from '@/utils';
import { API } from '@/constants';
export const charitiesService = (() => {
  const fetchAll = () =>
    axiosInstance.get(API.CHARITIES).then((res) => res?.data);

  return {
    fetchAll,
  };
})();
