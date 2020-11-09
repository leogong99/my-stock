import React, { useState, Suspense } from 'react';
import 'react-calendar/dist/Calendar.css';

import StockSymbol from '../components/StockSymbol';
import Calendar from '../components/Calendar';

import ErrorBoundary from "../components/ErrorBoundary";

import { useFetchDailyPrice } from '../data/fetch_daily';


import Select from '@material-ui/core/Select';

import Logo from '../components/Logo';
import CandleChart from '../components/CandleChart';
import DailyChart from '../components/DailyChart';
import PriceTarget from '../components/PriceTarget';


import "./Content.scss";

const Content = () => {

  const chartOptions = [{
    value: "DailyChart",
    label: "Daily Chart"
  }, {
    value: "CandleChart",
    label: "Candle Chart"
  }, {
    value: "PriceTarget",
    label: "Price Table"
  }];

  const chartMap = {
    DailyChart: DailyChart,
    CandleChart: CandleChart,
    PriceTarget: PriceTarget
  };

  const [date, setDate] = useState("2020-10-13");
  const [symbol, setSymbol] = useState('AAPL');
  const [chart, setChart] = useState('DailyChart')
  
  const { data,  error } = useFetchDailyPrice(symbol, date.split('-').join(""));
  
  if (error) return <p>Error!</p>

  const handleChange = (event) => {
    setChart( event.target.value );
  }

  const ChartComponent = chartMap[chart];

  const getRenderingComponent = () => {
    const ChartComponent = chartMap[chart];
    if(chart === 'PriceTarget') {
      return (
        <PriceTarget symbol={symbol} />
      )
    }
    return (
      <ChartComponent data={data} />
    )
  }

  return (
    <main role="main" className="flex-shrink-0 mt-5">
      <div className="container content">
        <div className="main-content">
          <div className="flex-center mt-4">
            <StockSymbol 
              symbol={symbol}
              onChange={symbol=>setSymbol(symbol)}
            />
          </div>
          <div className="flex-center">
            <Logo symbol={symbol} />
          </div>
          <div className="flex-center">
            <Calendar 
              onChange={(date)=>{setDate(date)}}
            />
          </div>
          <ErrorBoundary>
            <div className="chart-container">
              {getRenderingComponent()}
            </div>
          </ErrorBoundary>
          <div className="flex-center">
            <Select
              native
              value={chart}
              onChange={handleChange}
              inputProps={{
                name: 'chart',
                id: 'chart-select',
              }}
            >
              {chartOptions.map((chartOption) => {
                return (
                  <option key={chartOption.label} value={chartOption.value}>{chartOption.label}</option>
                );
              })}
            </Select>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Content;
