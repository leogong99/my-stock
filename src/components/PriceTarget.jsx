import React from 'react';

import {useFetchLogoUrl} from '../data/fetch_target_price';

const PriceTarget = ({symbol}) => {

  const {priceTarget, loading, error} = useFetchLogoUrl(symbol);

  if(error || loading) return <p>loading</p>
  const {updatedDate, priceTargetAverage, priceTargetHigh, priceTargetLow, numberOfAnalysts} = priceTarget;
  return (
    <div className="price-target table-responsive m-4">
      <table className="table table-bordered table-hover">
        <tbody>
        <tr className="table-Secondary">
          <td>Symbol</td>
          <td>{symbol}</td>
        </tr>
        <tr className="table-primary">
          <td>Date</td>
          <td>{updatedDate}</td>
        </tr>
        <tr className="table-info">
          <td>Average</td>
          <td>{priceTargetAverage}</td>
        </tr>
        <tr className="table-success">
          <td>High</td>
          <td>{priceTargetHigh}</td>
        </tr>
        <tr className="table-danger">
          <td>Low</td>
          <td>{priceTargetLow}</td>
        </tr>
        <tr className="table-active">
          <td>Number of Analysts</td>
          <td>{numberOfAnalysts}</td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};
export default PriceTarget;

