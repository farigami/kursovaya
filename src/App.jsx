import React, { useState } from "react";
import data from './Components/data/items.json'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Header from "./Components/Header";
import Content from "./Components/Content";
import Basket from "./Components/Basket";

import './style.css'
import './adaptive.css'
import './Components/header.css'

const App = () => {
  const [basket, setBasket] = useState([])
  const handleAddProduct = (item) => { 
    item.count++
    setBasket(basket.concat(item))
    console.log(basket)
  }

  return (
    <>
      <Header basket={basket}/>
      <Content items={data} basket={basket} handleAddProduct={handleAddProduct}/>
    </>
  )
}

export default App;
