import React, {useState} from 'react';

import 'bootstrap/dist/css/bootstrap.css';


import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from "@material-ui/core/TextField";

import SP500Symbols from '../data/symbol';

const StockSymbol = ({symbol, onChange}) => {

  const [currentValue, setCurrentValue] = useState(symbol);
  let defaultValue = symbol;

  const options = SP500Symbols.map((company) => {
    return {
      label: company.Symbol
    };
  });

  return (
    <Autocomplete
      id="combo-box-demo"
      freeSolo
      disableClearable
      options={SP500Symbols}
      getOptionLabel={option => option.Symbol || option}
      style={{ width: 300 }}
      value={symbol}
      onChange={(event, newValue)=>{
        if(newValue && newValue.Symbol) {
          onChange(newValue.Symbol);
        } else {
          onChange(newValue);
        }
      }}
      renderInput={(params) => <TextField {...params} label="Stock Symbol" variant="outlined" />}
    />
  );
}

export default StockSymbol;