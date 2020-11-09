import { Chart } from "react-google-charts";
import React from 'react';

const DailyChart = ({data}) => {

  const charData = data.map( price=>{
    return [price.label, price.average];
  });
  return (
    <div className={"my-pretty-chart-container"}>
      <Chart
        chartType="LineChart"
        data={[[{
          type: "string",
          id: "time"
        }, {
          type: "number"
        }], ...charData]}
        width="100%"
        height="400px"
        legendToggle
      />
    </div>
  );
}

export default DailyChart;