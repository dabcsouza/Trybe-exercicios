const express = require('express');
const bodyParser = require('body-parser');
const userControler = require('./controllers/userController');
const app = express()
const PORT = 3000;

app.use(bodyParser.json());
app.use('/user', userControler);
app.listen(PORT, () => console.log(`App rodando na porta ${ PORT }`));

module.exports = app;