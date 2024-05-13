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
        {/* <h3>Name:</h3>
        <input type='text'></input>
        <h3>Age:</h3>
        <h3>Location:</h3>
        <h3>FollowersCount: </h3>
        <h3>LikesCount: </h3>
        <h3>PostsCount:</h3>
        <h3>Photo:</h3>
        <button>Create Profile</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p> */}
      </div>
      <SignupForm />
    </>
  )
}

export default App
