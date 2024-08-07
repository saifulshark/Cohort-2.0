import { useEffect, useState } from 'react'

function useInterval(callback, delay) {
  useEffect(() => {
    const intervalId = setInterval(callback, delay);
    return () => {
      clearInterval(intervalId);
    };
  }, [callback, delay]);
}


function App() {
  const [count, setCount] = useState(0);
  useInterval(() => {
    setCount(c => c + 1);
  },2000);
  // const status = useInterval();
  return (
    <>
      The count is {count}
    </>
  )
}


export default App