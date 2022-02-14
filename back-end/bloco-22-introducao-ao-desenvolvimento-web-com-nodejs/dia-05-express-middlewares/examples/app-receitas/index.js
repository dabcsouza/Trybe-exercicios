const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3001;

const app = express();
app.use(bodyParser.json());


app.get('/open', function (_req, res) {
  res.send('open!');
});

const recipesRouter = require('./recipesRouter');
app.use('/recipes', recipesRouter);



app.all('*', function (req, res) {
    return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
});

app.listen(PORT, () => {
  console.log(`Aplicação ouvindo na porta ${ PORT }`);
});