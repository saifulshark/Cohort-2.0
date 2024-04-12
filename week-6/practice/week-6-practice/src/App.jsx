import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const Header = function ({title}){
    return <div>
      {title}
    </div>
  }

  function CardWrapper({innerComponent}){
    console.log(innerComponent);
    return <div style={{ border: "2px solid #000000", padding:200 }}>
        <div>hehednejdedmede</div>
        {innerComponent}
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
      <CardWrapper innerComponent={<Header title="Sameena"/>} />
      <CardWrapper innerComponent={<HeaderWithApp />} />
    </>
  )
}

export default App
