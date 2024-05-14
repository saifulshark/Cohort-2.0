import { useState, useEffect } from 'react';
import { PostCard } from './PostCard'
import { ShowCard } from './ShowCard'


function App() {
  const [cards,setCards]=useState([])

  const fetchData = async () => {
    try {
        const res = await fetch("http://localhost:3000/cards");
        const result = await res.json();
        setCards(result);
    } catch (err) {
        console.error("Error fetching data:", err);
    }
};

useEffect(() => {
    const intervalId = setInterval(fetchData, 5000);
    
    return () => {
        clearInterval(intervalId);
    };
}, []);

  return (
    <div>
      <PostCard></PostCard>
      <ShowCard cards={cards} setCards={setCards}></ShowCard>
    </div>
  )
}

export default App
