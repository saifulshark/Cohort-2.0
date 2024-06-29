// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://12345:12345@cluster0.fu6npis.mongodb.net/week5', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

const cardSchema = new mongoose.Schema({
  name: String,
  description: String,
  socialMedia: [{ platform: String, url: String }],
  interests: [String]
});

const Card = mongoose.model('Card', cardSchema);

app.get('/cards', async (req, res) => {
  const cards = await Card.find();
  res.json(cards);
});

app.post('/cards', async (req, res) => {
  const card = new Card(req.body);
  await card.save();
  res.json(card);
});

app.put('/cards/:id', async (req, res) => {
  const card = await Card.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(card);
});

app.delete('/cards/:id', async (req, res) => {
  await Card.findByIdAndDelete(req.params.id);
  res.json({ message: 'Card deleted' });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
