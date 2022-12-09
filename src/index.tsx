import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';


import NavSection from './components/nav/nav';
import MainSection from './components/main/main';
import FooterSection from './components/footer/footer';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <NavSection />
    <MainSection />
    <FooterSection />
  </React.StrictMode>
);

reportWebVitals();
