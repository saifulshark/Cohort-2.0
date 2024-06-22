// src/App.jsx
import React, { useEffect, useState } from 'react';
import axios from './axios';  // Use the axios instance
import Card from './components/Card';
import CardForm from './components/CardForm';
import './App.css';

const App = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get('/cards');
        setCards(response.data);
      } catch (error) {
        console.error("There was an error fetching the cards!", error);
      }
    };
    fetchCards();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/cards/${id}`);
      setCards(cards.filter(card => card._id !== id));
    } catch (error) {
      console.error("There was an error deleting the card!", error);
    }
  };

  return (
    <div className="App">
      <h1>e-Business Cards</h1>
      <CardForm />
      <div className="card-list">
        {cards.map(card => (
          <Card
            key={card._id}
            id={card._id}
            name={card.name}
            description={card.description}
            socialMedia={card.socialMedia}
            interests={card.interests}
            onDelete={handleDelete}  // Pass the handleDelete function
          />
        ))}
      </div>
    </div>
  );
};

export default App;
