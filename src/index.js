import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import './css/main.scss';

import store from './containers/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';


import Home from './containers'; 

let persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>

   
  <React.StrictMode>
    <Home />
  </React.StrictMode>

  </PersistGate>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
