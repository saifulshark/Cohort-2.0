import { useState } from 'react';
import './App.css'
import axios from 'axios'


function App() {
  const [words, setWords] = useState("")
  const [generatedContent, setGeneratedContent] = useState("")
  const [receivedContent, setReceivedContent] = useState(false)
  function getWords(){
    axios.get(`https://randommer.io/api/Text/LoremIpsum?loremType=normal&type=words&number=${words}`, {headers:{
      'X-Api-Key': import.meta.env.VITE_RANDOMMER_API_KEY
    }})
    .then(response => {
        setGeneratedContent(response.data);
        setReceivedContent(true)
      })
    .catch((error) => {
        console.log('error ' + error);
      });
  }


  return (
    <>
      <div class="flex flex-col items-center pt-28">
        <h1 class="text-5xl font-medium">Para Generator</h1>
        <div class="mt-7">
          <input required onChange={(e) => setWords(e.target.value)} class="h-14 sm:w-[750px] border border-gray-300 px-4 py-2 focus:outline-0" type="search" name="" placeholder="Enter the number of words" id="" />
          <button onClick={getWords} class="inset-y-0 right-0 ml-4 h-14 rounded-2xl bg-black px-4 py-2 text-white">Generate</button>
        </div>
        {
          receivedContent ? 
          <div class="h-full w-[345px] sm:w-[880px] border-2 mx-9 mt-16 flex justify-center">
            <p class="p-5 text-justify">{generatedContent}</p>
          </div>
          :
          ""
        }
        
      </div>
    </>
      
  )
}

export default App
