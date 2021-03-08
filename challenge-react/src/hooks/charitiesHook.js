import { useDispatch, useSelector } from 'react-redux';
import {
  charitiesSelector,
  fetchCharitiesList,
  errorSelector,
  statusSelector,
} from '@/modules/charitiesModule';

export const useCharitesHook = () => {
  const dispatch = useDispatch();
  const charitiesList = useSelector(charitiesSelector);
  const errorMesssage = useSelector(errorSelector);
  const status = useSelector(statusSelector);

  function fetchCharities() {
    dispatch(fetchCharitiesList());
  }
  return {
    dispatch,
    charitiesList,
    fetchCharities,
    errorMesssage,
    status,
  };
};
