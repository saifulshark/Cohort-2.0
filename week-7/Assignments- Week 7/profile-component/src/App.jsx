import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { SignupForm } from './components/Form';

function App() {

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Profile Card Creator</h1>
      <div>
        <h2>Enter your details:</h2>
      </div>
      <SignupForm />
    </>
  )
}

export default App
