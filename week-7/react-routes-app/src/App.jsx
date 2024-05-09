import { useState } from 'react'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { countAtom } from './store/atoms/count';
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </>
  )
}

/*
Context API is used for more cleaner code/syntax  and to avoid prop drilling.
Context API don't do anything on perfromance improvements.
state management libraries are those who does the both.

A react application ideally have 2 components on a very high level, the state logic and the component logic.
Recoil is a state management library that helps in doing this.

If we know a state variable needs to be used inside a componnet and only inside that component only we can use useState instead of recoil. It's like recoil is more towards global like state variables.

*/
const Count = () => {
  console.log('Count');
  return (
    <>
      <CountRenderer/>
      <Buttons />
    </>
  )
}

const CountRenderer = () => {
  const count = useRecoilValue(countAtom);
  console.log("CountRenderer");
  return(
    <div>{count}</div>
  )
}

const Buttons = () => {
  console.log("Buttons");
  const setCount = useSetRecoilState(countAtom);
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
