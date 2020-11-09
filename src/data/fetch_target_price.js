
import useAxios from 'axios-hooks'
import { getTargetPriceUrl } from "./api_config";

export const useFetchLogoUrl = (symbol) => {
  const [{ data, loading, error }, refetch] = useAxios(
    getTargetPriceUrl(symbol)
  );
  const priceTarget = loading || error ? {} : data; 


  return {
    priceTarget,
    loading,
    error
  };

};
