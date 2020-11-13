
import useAxios from 'axios-hooks'
import { getTargetPriceUrl } from "./api_config";

const useFetchTargetPrice = (symbol) => {
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

export default useFetchTargetPrice;
