const express = require('express');
const bodyParser = require('body-parser');
const app = express()
const PORT = 3000;

app.use(bodyParser.json());
const cep = require('./controller/CepController.js');

app.get('/ping', (_req, res) => {
  return res.status(200).json({ message: 'pong' });
});

app.get('/cep/:id', cep.handleCepParams);

app.listen(PORT, () => console.log(`Example app listening on port ${ PORT }!`));