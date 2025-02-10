import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Home from './pages/Produtos'
import Home from './pages/Contato'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <h1 className='text-red-700'></h1>
      <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/" element={<Produtos/>}/>
      <Route path="/" element={<Contato/>}/>
    </Routes> 
    </Router>
    </>
  )
}

export default App
