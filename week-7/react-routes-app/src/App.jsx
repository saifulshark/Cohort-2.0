import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import { Dashboard } from './components/Dashboard'
import { Landing } from './components/Landing'

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      < BrowserRouter>
      <TopBar/>
        <Routes>
          <Route element={<div>Hi There</div>}/>
          <Route path='/Dashboard' element={<Dashboard/>}/>
          <Route path='/' element={<Landing/>}/>
        </Routes>
    </BrowserRouter>
    </>
  )
}

const TopBar = () => {
  const navigate =useNavigate();
  return (
    <div /*style={{background: "black", color: "white"}}*/>
      <button onClick={() => {navigate('/')}}>Home</button>
      <button onClick={() => {navigate('/Dashboard')}}>Dashboard</button>
    </div>
  )
}

export default App
