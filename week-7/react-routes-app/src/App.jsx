import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Dashboard } from './components/Dashboard'
import { Landing } from './components/Landing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div /*style={{background: "black", color: "white"}}*/>
      <button onClick={() => {window.location.href = "/";}}>Home</button>
      <button onClick={() => {window.location.href = "/Dashboard";}}>Dashboard</button>
    </div>
      < BrowserRouter>
        <Routes>
          <Route element={<div>Hi There</div>}/>
          <Route path='/Dashboard' element={<Dashboard/>}/>
          <Route path='/' element={<Landing/>}/>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
