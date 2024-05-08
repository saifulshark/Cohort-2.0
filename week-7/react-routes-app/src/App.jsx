import { useState, lazy, Suspense } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
const DashBoard = lazy(() => import('./components/Dashboard'));
const  Landing = lazy(() => import('./components/Landing'));
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Count count={count}/>
      <Buttons />
    </>
  )
}

const Count = ({count}) => {
  return (
    <div>{count}</div>
  )
}

const Buttons = () => {
  return(
    <div>
      <button onClick={() => {console.log("Increase Count")}}>Increase Count</button>
      <button onClick={() => {console.log("Decrease Count")}}>Decrease Count</button>
    </div>
  )
}

export default App
