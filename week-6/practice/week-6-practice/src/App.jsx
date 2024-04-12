import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  function Header({title}){
    return <div>
      {title}
    </div>
  }

  function HeaderWithApp() {
    const [ title, setTitle ] = useState("Hashir");

    return (
      <>
        <button onClick={() => {
          setTitle(Math.random());
        }}>Change Title</button>
        <div>{title}</div>
      </>
    )
  }

  return (
    <>
      <Header title="Sameena"/>
      <HeaderWithApp/>
    </>
  )
}

export default App
