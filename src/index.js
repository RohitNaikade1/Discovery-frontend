import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import {Provider} from 'react-redux';
import store from './Redux/store/store'
import History from './helpers/helpers'

ReactDOM.render(
  <BrowserRouter history={History}>
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>,
  document.getElementById('root')
);

