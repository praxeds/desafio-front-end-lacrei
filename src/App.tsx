import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { GlobalStyles } from './Styles/GlobalStyles';


import Nav from './Components/Nav';
import Home from './Pages/Home';
import User from './Pages/User';
import Footer from './Components/Footer';

export default function App() {
  return (
    <>
        <GlobalStyles />
        <Nav />
        <Home />
        <User />
        <Footer />
    </>
  );
}
