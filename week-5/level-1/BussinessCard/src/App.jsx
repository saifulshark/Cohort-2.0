import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BusinessCard from "./BusinessCard.jsx";

function App() {
  const [details, setDetails] = useState([
    {
      name: "Abhishek Rathore",
      description: "FullStack Developer and Android Developer",
      interests: ["Playing cricket", "Playing video games", "Watching Anime"],
      instagram: "regxl2",
      twitter: "ShekAbhi2",
      linkedin: "abhishek-rathore-1bb6a4254"
    },
    {
      name: "Abhishek Rathore",
      description: "FullStack Developer and Android Developer",
      interests: ["Playing cricket", "Playing video games", "Watching Anime"],
      instagram: "regxl2",
      twitter: "ShekAbhi2",
      linkedin: "abhishek-rathore-1bb6a4254"
    },
    {
      name: "Abhishek Rathore",
      description: "FullStack Developer and Android Developer",
      interests: ["Playing cricket", "Playing video games", "Watching Anime"],
      instagram: "regxl2",
      twitter: "ShekAbhi2",
      linkedin: "abhishek-rathore-1bb6a4254"
    },
    {
      name: "Abhishek Rathore",
      description: "FullStack Developer and Android Developer",
      interests: ["Playing cricket", "Playing video games", "Watching Anime"],
      instagram: "regxl2",
      twitter: "ShekAbhi2",
      linkedin: "abhishek-rathore-1bb6a4254"
    }
  ])

  return (
    <div>
      {
        details.map(detail =>{
          return(
              <BusinessCard detail={detail}/>
          )
        })
      }
    </div>
  )
}

export default App
