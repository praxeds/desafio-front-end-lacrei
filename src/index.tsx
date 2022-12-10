import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Nav from './components/nav/nav';
import Home from './components/home/home';
import User from './components/usuario/usuario';
import Profissional from './components/profissional/profissional';
import Footer from './components/footer/footer';

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
