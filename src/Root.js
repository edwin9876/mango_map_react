import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import store from './redux/store';

export default ({ children, initialState = [] }) => {
  ReactDOM.render(
    <Provider store={store}>{children} </Provider>,
    document.getElementById('root')
  );

  return <Provider store={store}>{children} </Provider>;
};
