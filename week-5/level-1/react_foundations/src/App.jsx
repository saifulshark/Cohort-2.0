import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [interests, setInterests] = useState('');
  const [cards, setCards] = useState([]);
  const [linkedin, setLinkedin] = useState('');
  const [twitter, setTwitter] = useState('');
  const [confirmationMessage, setConfirmationMessage] = useState('')
  const [view, setView] = useState('')

  useEffect(() => {
    axios.get('api/cards').then(response => {
      setCards(response.data);
    });
  }, []);

  async function handleSubmit(e) {
    try{
      e.preventDefault();
      const newCard = { name, description, linkedin, twitter, interests };
      const response = await axios.post('api/cards', newCard);
      setCards([...cards, response.data]);
      setName('');
      setDescription('');
      setInterests('');
      setLinkedin('');
      setTwitter('');
      setConfirmationMessage('Card saved successfully');
      setTimeout(() => {
        setConfirmationMessage('')
      }, 3000)
  } catch (error) {
      setConfirmationMessage('Error in saving card')
    }
  }

  return (
    <div className="app-container">
      <p align='center'>E-Business Card</p>
      {!view && (
        <div className="button-container">
          <button onClick={() => setView('cards')}>Show Cards</button>
          <button onClick={() => setView('register')}>Register</button>
        </div>
      )}
      {view && (
        <button className="back-button" onClick={() => setView('')}>
          Back
        </button>
      )}
      {view === 'cards' && (
        <div className="card-list">
          {cards.map((card, index) => (
            <div key={index} className="card">
              <h2>{card.name}</h2>
              <p>{card.description}</p>
              <div>{card.interests}</div>
              <div className="social-links">
                <a href={card.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href={card.twitter} target="_blank" rel="noopener noreferrer">Twitter</a>
              </div>
              
            </div>
          ))}
        </div>
      )}
      {view === 'register' && (
        <form onSubmit={handleSubmit} className="card-form">
          {confirmationMessage && <p className="confirmation-message">{confirmationMessage}</p>}
          <label htmlFor="name">Enter your name</label>
          <input type='text' id="name" placeholder="John" value={name} onChange={(e) => setName(e.target.value)} />

          <label htmlFor="description">Enter your description</label>
          <input type='text' id="description" placeholder="Software engineer" value={description} onChange={(e) => setDescription(e.target.value)} />

          <label htmlFor="linkedin">Enter your Linkedin URL</label>
          <input type="url" id="linkedin" placeholder="LinkedIn URL" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} required />

          <label htmlFor="twitter">Enter your Twitter URL</label>
          <input type="url" id="twitter" placeholder="Twitter URL" value={twitter} onChange={(e) => setTwitter(e.target.value)} required />

          <label htmlFor="interests">Enter your interests</label>
          <input type='text' id="interests" placeholder="Chess and cricket" value={interests} onChange={(e) => setInterests(e.target.value)} />

          <button type='submit'>Save Card</button>
        </form>
      )}
    </div>
  );
}


export default App;
