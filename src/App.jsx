import React from "react";

import Content from "./Components/Content";
import Basket from "./Components/Basket";
import About from "./Components/About/About";

import './style.css'
import './adaptive.css'
import { Route, Routes  } from "react-router-dom";

const App = () => {
  return (
    <>
    <Routes>
      <Route exact path='/' element={<Content /> } />
      <Route exact path='/basket'element={<Basket /> } />
      <Route exact path='/about'element={<About /> } />
    </Routes>
    </>
  )
}

export default App;
