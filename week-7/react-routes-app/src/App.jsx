import { useState, useContext } from 'react'
import { CountContext } from './context'
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <CountContext.Provider value={{ count, setCount }}>
        <Count />
      </CountContext.Provider>
    </>
  )
}

/*
Context API is used for more cleaner code/syntax  and to avoid prop drilling.
Context API don't do anything on perfromance improvements.
state management libraries are those who does the both.

A react application ideally have 2 components on a very high level, the state logic and the component logic.
Recoil is a state management library that helps in doing this.

*/
const Count = () => {
  return (
    <>
      <CountRenderer/>
      <Buttons />
    </>
  )
}

const CountRenderer = () => {
  console.log("CountRenderer");
  const {count, setCount} = useContext(CountContext);
  return(
    <div>{count}</div>
  )
}

const Buttons = () => {
  console.log("Buttons");
  const {count, setCount} = useContext(CountContext);
  return(
    <div>
      <button onClick={() => {
        console.log("Increase Count");
        setCount(prevCount => prevCount + 1);
        }
        }>Increase Count</button>
      <button onClick={() => {
        console.log("Decrease Count");
        setCount(prevCount => prevCount - 1);
        }}>Decrease Count</button>
    </div>
  )
}

export default App
