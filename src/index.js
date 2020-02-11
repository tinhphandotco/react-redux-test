import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './redux/store'
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import Hooks from './Hooks';
import { Lightweight } from './chartjs'
import ReactSlickDemo from "./react-slick"
import Test from "./Test";
import SocketIO from './SocketIO';
import TestReselect from './reselect-test';

import * as serviceWorker from './serviceWorker';

import './index.css';

ReactDOM.render(
  <Provider store={store}>
    {/* <App /> */}
    {/* <BrowserRouter><Test /></BrowserRouter> */}
    {/* <Lightweight /> */}
    {/* <ReactSlickDemo /> */}
    {/* <SocketIO /> */}
    <TestReselect />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
