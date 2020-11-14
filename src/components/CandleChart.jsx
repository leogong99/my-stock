import { Chart } from "react-google-charts";
import React from 'react';

const CandleChart = ({data, symbol}) => {

  const charData = data.map( price=>{
    return [price.label, price.low, price.open, price.close, price.high];
  });
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