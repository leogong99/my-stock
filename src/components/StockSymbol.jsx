import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';


import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from "@material-ui/core/TextField";

import SP500Symbols from '../data/symbol';
import useSearchSymbols from '../data/search_symbols';

const StockSymbol = ({symbol, onChange}) => {

  const [autoCompleteOptions, setAutoCompleteOptions] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  
  let loading = autoCompleteOptions.length === 0 && open;
  const {results, error} = useSearchSymbols("aapl");

  React.useEffect(() => {
    
    setAutoCompleteOptions(results);
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setAutoCompleteOptions([]);
    }
  }, [open]);

  return (
    <Autocomplete
      id="combo-box-demo"
      freeSolo
      options={SP500Symbols}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      loading={loading}
      getOptionLabel={option => option.symbol || option}
      style={{ width: "50%" }}
      value={symbol}
      onChange={(event, newValue)=>{
        if(newValue && newValue.symbol) {
          onChange(newValue.symbol);
        } else {
          onChange(newValue);
        }
      }}
      renderInput={(params) => <TextField {...params} label="Stock Symbol" variant="outlined" />}
    />
  );
}

export default StockSymbol;