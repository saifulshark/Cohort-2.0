// src/components/Card.js
import React from 'react';
import './Card.css';

const Card = ({ id, name, description, socialMedia, interests, onDelete }) => {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>{description}</p>
      <div className="interests">
        <h4>Interests</h4>
        <ul>
          {interests.map((interest, index) => (
            <li key={index}>{interest}</li>
          ))}
        </ul>
      </div>
      <div className="social-media">
        {socialMedia.map((handle, index) => (
          <a key={index} href={handle.url} target="_blank" rel="noopener noreferrer" className="social-button">
            {handle.platform}
          </a>
        ))}
      </div>
      <button onClick={() => onDelete(id)} className="delete-button">Delete</button>
    </div>
  );
};

export default Card;
