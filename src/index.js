import React from 'react';
import ReactDOM from 'react-dom';
import {setBasepath} from 'hookrouter'
import './Styles/index.css';
import App from './Landing';

// setBasepath("/dashboard-covid")
ReactDOM.render(
    <App />,
  document.getElementById('root')
);

