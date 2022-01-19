import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import History from './helpers/helpers'

ReactDOM.render(
  <BrowserRouter history={History}>
    <App />
    </BrowserRouter>,
  document.getElementById('root')
);

