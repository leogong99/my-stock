import React from 'react';

import useFetchTargetPrice from '../data/fetch_target_price';

const PriceTarget = ({symbol}) => {

  const {priceTarget, loading, error} = useFetchTargetPrice(symbol);

  if(error || loading) return <p>loading</p>
  const {updatedDate, priceTargetAverage, priceTargetHigh, priceTargetLow, numberOfAnalysts} = priceTarget;
  return (
    <div className="price-target table-responsive m-4">
      <table className="table table-bordered table-hover table-striped">
        <tbody>
        <tr>
          <td>Symbol</td>
          <td>{symbol}</td>
        </tr>
        <tr>
          <td>Date</td>
          <td>{updatedDate}</td>
        </tr>
        <tr>
          <td>Average</td>
          <td>{priceTargetAverage}</td>
        </tr>
        <tr>
          <td>High</td>
          <td>{priceTargetHigh}</td>
        </tr>
        <tr>
          <td>Low</td>
          <td>{priceTargetLow}</td>
        </tr>
        <tr>
          <td>Number of Analysts</td>
          <td>{numberOfAnalysts}</td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};
export default PriceTarget;

