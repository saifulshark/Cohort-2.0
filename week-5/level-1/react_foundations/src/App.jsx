import { useState } from 'react'
import profiles from './profiles'
import './App.css';
function App() {

  return (
   <div>
    <Card profiles={profiles}></Card>
   </div>
  )
}

//button component
function Card(props){
  let profiles = props.profiles
  
  return(
    <div>
    {profiles.map((profile,index)=> (
      <div className='cardContainer' key={index}>
        <h3>{profile.name}</h3>
        <h4>{profile.description}</h4>
        <h4>{profile.interests}</h4>
      </div>))}
    </div>
 
  )
}
export default App
