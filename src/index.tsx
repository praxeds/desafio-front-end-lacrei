import React from 'react';
import ReactDOM from 'react-dom/client';
import './stylesheets/index.css';
import reportWebVitals from './reportWebVitals';

import Nav from './components/nav';
import Home from './components/home';
import User from './components/usuario';
import Profissional from './components/profissional';
import Footer from './components/footer';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Nav />
      < Home />
      < User />
      < Profissional />
      <Footer />
  </React.StrictMode>
);

reportWebVitals();
