import { Chart } from "react-google-charts";
import React from 'react';

const DailyChart = ({data, symbol}) => {

  const charData = data.map( price=>{
    return [price.label, price.average];
  });
  return (
    <div className={"my-pretty-chart-container"}>
      <Chart
        chartType="LineChart"
        data={[[{
          type: "string"
        }, {
          type: "number",
          label: symbol
        }], ...charData]}
        width="100%"
        height="400px"
      />
    </div>
  );
}

export default DailyChart;