import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Home/Home.jsx";
import Product_Click from "./Product_Click/Product_Click.jsx";




function App() {


  return (

   <BrowserRouter>
   <Routes>

   <Route path="/" element={<Home/>} />

   <Route path="/product/:id" element={<Product_Click/>} />

   </Routes>
   </BrowserRouter>

  )
}

export default App
