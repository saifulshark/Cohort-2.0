import { useState } from "react"
import { CardRendering } from "./rendering/cardRender"

function App() {
  const [card,setCard]=useState({
    name:"Gauravpreet singh",
    desciption:"fjdjffklfnsf0",
    linkedin:"fdfsdf",
    twitter:"dfdsfs",
    interest:["hello","fdfjdsf0","fnkfn"]
  })
  return (
   <>
   <CardRendering card={card}></CardRendering>
   </>
  )
}

export default App
