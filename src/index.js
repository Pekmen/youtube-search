import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reducer from './reducers/reducers';
import './main.css';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducer)}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
