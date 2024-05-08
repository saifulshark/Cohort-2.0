import { useState, lazy, Suspense } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
const DashBoard = lazy(() => import('./components/Dashboard'));
const  Landing = lazy(() => import('./components/Landing'));
import { CountContext } from './context'
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <CountContext.Provider value={count}>
        <Count count={count} setCount={setCount}/>
      </CountContext.Provider>
    </>
  )
}

const Count = ({count, setCount}) => {
  return (
    <>
      <CountRenderer count={count}/>
      <Buttons count={count} setCount={setCount}/>
    </>
  )
}

const CountRenderer = ({count}) => {
  return(
    <div>{count}</div>
  )
}

const Buttons = ({count, setCount}) => {
  return(
    <div>
      <button onClick={() => {
        console.log("Increase Count");
        setCount(count + 1);
        }
        }>Increase Count</button>
      <button onClick={() => {
        console.log("Decrease Count");
        setCount(count - 1);
        }}>Decrease Count</button>
    </div>
  )
}

export default App
