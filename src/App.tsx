import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { GlobalStyles } from './Styles/GlobalStyles';


import Nav from './Components/Nav';
import Footer from './Components/Footer';

export default function App() {
  return (
    <>
        <GlobalStyles />
        <Nav />
        <Footer />
    </>
  );
}
