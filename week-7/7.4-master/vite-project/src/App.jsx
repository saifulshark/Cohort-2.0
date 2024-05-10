import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { networkAtom } from './atoms'

function App() {
  /**
   * We can use useState like the one in below to store the data for these buttons. But instead of that 
   * we're gonna use recoil and use atoms.
      const [count, setCount] = useState(0)
   * 
   */

  return(
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  )
}

const MainApp = () => {
  const networkNotificationCount = useRecoilValue(networkAtom);
  return (
    <>
        <button>Home</button>
        <button>My Network ({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
        <button>Jobs ()</button>
        <button>Messaging ()</button>
        <button>Notifications ()</button>
        <button>Me ()</button>
    </>
  )
}

export default App
