import React from 'react';

import { useFetchLogoUrl } from '../data/fetch_logo_url';
import "./Logo.scss";

const Logo = ({symbol}) => {

  const { url } = useFetchLogoUrl(symbol);
  return (
    <div className ="logo" >
      <img src={url} alt={`${symbol} logo`} />
    </div>
  );
};


export default Logo;