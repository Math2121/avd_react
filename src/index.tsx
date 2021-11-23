import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyle } from './global/styles';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({once:true});
ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
);

