import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';

import StockSymbol from '../components/StockSymbol';
import Calendar from '../components/Calendar';

import ErrorBoundary from "../components/ErrorBoundary";

import useFetchDailyPrice from '../data/fetch_daily';
import {getYesterdayStr} from '../helpers/utils';


import Select from '@material-ui/core/Select';

import Logo from '../components/Logo';
import CandleChart from '../components/CandleChart';
import DailyChart from '../components/DailyChart';


import "./Content.scss";

const Content = () => {

  const chartOptions = [{
    value: "DailyChart",
    label: "Daily Chart"
  }, {
    value: "CandleChart",
    label: "Candle Chart"
  }];

  const chartMap = {
    DailyChart: DailyChart,
    CandleChart: CandleChart
  };

  const [date, setDate] = useState(getYesterdayStr());
  const [symbol, setSymbol] = useState('AAPL');
  const [chart, setChart] = useState('DailyChart')
  
  const { data,  error } = useFetchDailyPrice(symbol, date.split('-').join(""));

  const handleChange = (event) => {
    setChart( event.target.value );
  }

  const getRenderingComponent = () => {
    const ChartComponent = chartMap[chart];
    return (
      <ChartComponent data={data} symbol={symbol}/>
    )
  }

  return (
    <main role="main" className="flex-shrink-0 mt-5">
      <div className="container content">
        <div className="main-content">
          <div className="d-flex justify-content-center mt-4">
            <StockSymbol 
              symbol={symbol}
              onChange={symbol=>setSymbol(symbol)}
            />
          </div>
          <div className="d-flex justify-content-center">
            <Logo symbol={symbol} />
          </div>

          {!error && 
          <>
            <ErrorBoundary>
              <div className="chart-container">
                {getRenderingComponent()}
              </div>
            </ErrorBoundary>
            <div className="d-flex justify-content-around">
              {chart !== 'PriceTarget' && <Calendar 
                onChange={(date)=>{setDate(date)}}
              />}
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
          </>}
        </div>
      </div>
    </main>
  );
};

export default Content;
