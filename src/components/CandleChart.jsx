import { Chart } from "react-google-charts";
import React from 'react';

import {bindingData} from '../helpers/utils';

const CandleChart = ({data, symbol}) => {

  const charData = bindingData(data);
  return (
    <div className={"my-pretty-chart-container"}>
      <Chart
        chartType="CandlestickChart"
        data={[[
          {
            type: "string",
            id: "time"
          },
          {
            type: "number",
            label: symbol
          },
          {
            type: "number"
          },
          {
            type: "number"
          },
          {
            type: "number"
          }
        ], ...charData]}
        width="100%"
        height="350px"
      />
    </div>
  );
}

export default CandleChart;