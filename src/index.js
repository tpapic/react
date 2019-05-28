import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import axios from 'axios';

axios.defaults.baseURL = 'http://www.fulek.com/nks/api/aw';

ReactDOM.render(<App />, document.getElementById('root'));
