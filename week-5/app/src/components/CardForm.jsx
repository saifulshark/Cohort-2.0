// src/components/CardForm.js
import React, { useState } from 'react';
import axios from '../axios';  // Import the axios instance

const CardForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    socialMedia: '',
    interests: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, description, socialMedia, interests } = formData;
    const cardData = {
      name,
      description,
      socialMedia: socialMedia.split(',').map(url => ({ platform: url.split(':')[0], url: url.split(':')[1] })),
      interests: interests.split(',')
    };
    await axios.post('/cards', cardData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
      <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange}></textarea>
      <input type="text" name="socialMedia" placeholder="Social Media Handles (platform:url)" value={formData.socialMedia} onChange={handleChange} />
      <input type="text" name="interests" placeholder="Interests" value={formData.interests} onChange={handleChange} />
      <button type="submit">Add Card</button>
    </form>
  );
};

export default CardForm;
