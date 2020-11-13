
import useAxios from 'axios-hooks'
import { getDailyStockPriceUrl } from "./api_config";

const useFetchDailyPrice = (symbol, date) => {

  let [{ data, loading, error }, refetch] = useAxios(
    getDailyStockPriceUrl(symbol, date)
  );
    
  if(loading || error) {
    data = [];
  }


  return {
    data,
    loading,
    error
  };
};

export default useFetchDailyPrice;

