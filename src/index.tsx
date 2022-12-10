import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Nav from './components/nav/nav';
import App from './app';
import Footer from './components/footer/footer';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Nav />
      <App />
      <Footer />
  </React.StrictMode>
);

reportWebVitals();
