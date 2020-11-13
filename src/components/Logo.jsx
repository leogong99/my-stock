import React from 'react';

import useFetchLogoUrl from '../data/fetch_logo_url';
import "./Logo.scss";

const Logo = ({symbol}) => {

  const { url, error} = useFetchLogoUrl(symbol);
  if(error) {
    return (
      <span>Please verify the stock symbol</span>
    );
  }
  return (
    <div className ="logo" >
      <img src={url} alt={`${symbol} logo`} />
    </div>
  );
};


export default Logo;