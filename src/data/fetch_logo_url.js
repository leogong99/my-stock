
import useAxios from 'axios-hooks'
import { getCompanyIconUrl } from "./api_config";

const useFetchLogoUrl = (symbol) => {
  const [{ data, loading, error }, refetch] = useAxios(
    getCompanyIconUrl(symbol)
  );
  const url = loading || error || !data ? "" : data.url; 


  return {
    url,
    loading,
    error
  };

};

export default useFetchLogoUrl;
