import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reducer from './reducers';
import './main.css';

const store = applyMiddleware(ReduxPromise)(createStore)
ReactDOM.render(
  <Provider store={store(reducer)}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
