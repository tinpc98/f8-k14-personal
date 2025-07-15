import { useState } from 'react'
import './App.css'
import CartUI from './CartUI.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
      <CartUI/>
  )
}

export default App
