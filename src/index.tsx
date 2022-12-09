import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Nav from './components/nav/nav';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Nav />
  </React.StrictMode>
);

reportWebVitals();
