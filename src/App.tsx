import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { GlobalStyles } from './Styles/GlobalStyles';


import Nav from './Components/Nav';
import Footer from './Components/Footer';

import Home from './Pages/Home';
import User from './Pages/User';
import Professional from './Pages/Professional';

export default function App() {
  return (
    <>
      <Router>
        <GlobalStyles />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pessoa-usuaria" element={<User />} />
          <Route path="/profissional" element={<Professional />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
