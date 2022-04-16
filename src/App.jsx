import React from "react";

import Content from "./Components/Content";
import Basket from "./Components/Basket/Basket";
import About from "./Components/About/About";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

import './style.css'
import './adaptive.css'
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <div className="content">
        <Routes>
          <Route exact path='/' element={<Content />} />
          <Route exact path='/basket' element={<Basket />} />
          <Route exact path='/about' element={<About />} />
        </Routes>
      </div>
      
      <Footer />
    </>
  )
}

export default App;
