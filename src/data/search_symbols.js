import useAxios from 'axios-hooks'
import { searchSymbolUrl } from "./api_config";

const useSearchSymbols = (fragment) => {
  const [{ data, loading, error }, refetch] = useAxios(
    searchSymbolUrl(fragment)
  );
  const results = loading || error || !data ? [] : data; 


  return {
    results,
    loading,
    error
  };

};

export default useSearchSymbols;
