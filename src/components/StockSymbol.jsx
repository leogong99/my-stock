import React from 'react';

import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from "@material-ui/core/TextField";

import SP500Symbols from '../data/symbol';

const StockSymbol = ({symbol, onChange}) => {

  return (
    <Autocomplete
      id="combo-box-demo"
      freeSolo
      options={SP500Symbols}
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