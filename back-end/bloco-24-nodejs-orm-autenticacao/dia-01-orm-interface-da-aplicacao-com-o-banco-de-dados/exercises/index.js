const express = require('express');
const bodyParser = require('body-parser');
const bookRouter = require('./Controllers/bookControler');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/books', bookRouter);

app.listen(PORT, () => console.log(`Aplicativo escutando na porta ${ PORT }`));
