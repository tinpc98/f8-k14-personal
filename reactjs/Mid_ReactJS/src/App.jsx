import { useState } from 'react'
import './App.css'
import ProductList from "./components/ProductList/index.jsx";
import ProductDialog from "./components/ProductDialog/index.jsx";

export default function App() {
  return (
      <div className="App">
          <h1>Quan Ly an Pham</h1>
          <ProductList />
      </div>
  )
}
