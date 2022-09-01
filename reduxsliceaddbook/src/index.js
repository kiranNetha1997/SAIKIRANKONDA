import React from 'react';
import ReactDOM from 'react-dom';
import Styles from './Components/Styles.css'
import App from './App';
import store from './Components/Slice/Store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);