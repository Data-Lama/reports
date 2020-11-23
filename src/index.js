import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import './Styles/index.css';
import App from './Landing';

ReactDOM.render(
  <HashRouter>
    <App key={"principalComponent"} />
  </HashRouter>,
  document.getElementById('root')
);

