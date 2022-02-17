const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = 3002;

app.use(cors());
app.use(bodyParser.json());

app.get('/ping', (_req, res) => {
  res.status(200).json({ message: 'pong' });
});

app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.status(201).json({message: `Hello, ${name}!`})
});

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;
  return parseInt(age) > 17 ? res.status(200)
    .json({message: `Hello, ${name}!`})
  : res.status(401).json({ message: 'Unauthorized' })
});

app.listen(PORT, () => {
  console.log(`Aplicação de exercício rodando na porta ${PORT}`)
});