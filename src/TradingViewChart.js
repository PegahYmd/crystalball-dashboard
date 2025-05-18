import React from 'react';
import './css/App.css';
import * as ReactBootStrap from 'react-bootstrap';
// import TradingViewWidget from 'react-tradingview-widget';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';


const TradingChart = () => (
  <TradingViewWidget
    symbol="NASDAQ:AAPL"
    theme={Themes.DARK}
    locale="fr"
    autosize
  />
);

export default TradingChart;