import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reducer from './reducers';
import { loadState, saveState } from './localStorage';
import './main.css';

const persistedState = loadState();
const storePromiseMiddleware = applyMiddleware(ReduxPromise)(createStore);
const store = storePromiseMiddleware(reducer, persistedState);


store.subscribe(() => {
  saveState({
    savedVideos: store.getState().savedVideos,
  });
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
