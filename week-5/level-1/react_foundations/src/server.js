import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:5173'
  }));


mongoose.connect('mongodb_url')

const CardSchema = new mongoose.Schema({
    name: String,
    description: String,
    interests: String,
    linkedin: String,
    twitter: String
})

const Card = mongoose.model('Card', CardSchema)

app.get('/api/cards', async (req, res) => {
    const cards = await Card.find();
    res.json(cards);
  });
  
  app.post('/api/cards', async (req, res) => {
    const newCard = new Card(req.body);
    await newCard.save();
    res.json(newCard);
  });
  
  app.put('/api/cards/:id', async (req, res) => {
    const card = await Card.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(card);
  });
  
  app.delete('/api/cards/:id', async (req, res) => {
    await Card.findByIdAndDelete(req.params.id);
    res.json({ message: 'Card deleted' });
  });
  
  app.listen(3002, () => {
    console.log('Server is running on port 3002');
  });