const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3000

const Author = require('./models/Author');
const Books = require('./models/Books');

app.use(bodyParser.json());

app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();
  res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;
  const author = await Author.getById(Number(id));

  return (!author)
  ? res.status(404).json({ message: 'Not found' })
  : res.status(200).json(author);
});

app.get('/books', async (_req, res) => {
  const books = await Books.getAll();
  return res.status(200).json(books);
});

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  const book = await Books.getById(Number(id));
  (!book) ? res.status(404).json({ message: 'Not found' })
    : res.status(200).json(book);
});

app.post('/books', async (req, res) => {
  const {authorId, title} = req.body;
  const isValidAuthor = await Books.isValidAuthor(authorId);
  if ( !isValidAuthor
    || !Books.isValidBook(title)) { 
      return res.status(400).json({ message: 'Dados inválidos' })
  }
  console.log(Books.isValidAuthor(authorId), Books.isValidBook(title));
  await Books.insertBook(title, authorId);
  return res.status(201).json({ message: 'Livro criado com sucesso!' });
})



app.listen(port, () => console.log(`App listening on port ${ port }!`))