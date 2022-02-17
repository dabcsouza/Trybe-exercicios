const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());
const PORT = 3001;

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

app.post('/recipes', (req, res) => {
  const { id, name, price } = req.body;
  recipes.push({ id, name,price });
  res.status(201).json({ message: 'Recipe created successfully'});
});

app.get('/recipes', (_req, res) => {
  res.json(recipes.sort((a, b) => (a.name > b.name ? 1 : -1)));
});

app.get('/recipes/search', (req,res) => {
  const { name, maxPrice, minPrice } = req.query;
  const filtered = recipes
    .filter((recipe) => recipe.name
    .includes(name) && recipe.price <= parseFloat(maxPrice)
    && recipe.price >= parseFloat(minPrice));
  return filtered.length === 0 ? res.status(404).json({
    message: 'recipe not found!',
  }) : res.status(200).json(filtered);
});

app.get('/recipes/:id', (req, res) => {
  const { id } = req.params;
  const recipe = recipes.find((resp) => resp.id === parseInt(id));
  return recipe ? res.status(200).json(recipe) : res.status(404).json({
    message: 'recipe not found!'
  });
});

app.post('/drinks', (req,res) => {
  const { id, name, price } = req.body;
  drinks.push({id, name, price});
  res.status(201).json({ message: 'Drink created successfully'});
});

app.get('/drinks', (_req, res) => {
  res.json(drinks.sort((a, b) => (a.name > b.name ? 1 : -1)));
});

app.get('/drinks/search', (req, res) => {
  const { name } = req.query;
  const drinksFiltered = drinks.filter((drink) => drink.name.includes(name));

  return drinksFiltered.length === 0
  ? res.status(404).json({
    message: 'drink not found!',
  })
  : res.status(200).json(drinksFiltered);
});

app.get('/drinks/:id', (req,res) => {
  const { id } = req.params;
  const drink = drinks.find((drink) => drink.id === parseInt(id));
  return drink ? res.status(200).json(drink) : res.status(404).json({
    message: 'drink not found!'
  });
});

app.get('/validateToken', (req, res) => {
  const token = req.headers.authorization;
  return token.length !== 16
  ? res.status(401).json({message: 'Invalid Token!'})
  : res.status(200).json({message: 'Valid Token!'});
});

app.put('/recipes/:id', (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price };

  res.status(204).end();
});

app.delete('/recipes/:id', (req, res) => {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes.splice(recipeIndex, 1);

  res.status(204).end();
});

app.all('*', (req, res) => {
  return res.status(404).json({ message: `Rota'${req.path}' não existe!`});
});

app.listen(PORT, () => {
  console.log(`Aplicação ouvindo na porta ${ PORT }`);
});