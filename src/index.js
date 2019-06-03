import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import axios from 'axios';
import { auth } from './services/auth';

axios.defaults.baseURL = 'http://www.fulek.com/nks/api/aw';

axios.interceptors.request.use(function (config) {
  let token = auth.getToken()
  config.headers.Authorization = 'Bearer ' + token;

  return config;
});

axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  if (401 === error.response.status) {
      window.location = '/login';
  } else {
    return Promise.reject(error);
  }
});

ReactDOM.render(<App />, document.getElementById('root'));
