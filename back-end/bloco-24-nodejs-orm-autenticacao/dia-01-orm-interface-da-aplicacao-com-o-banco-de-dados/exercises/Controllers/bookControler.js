const bookRouter = require('express').Router();
const { Book } = require('../models');
const defaultErrorMessage = { message: 'Algo deu errado'};

bookRouter.get('/', async (_req, res) => {
  try {
    const books = await Book.findAll();
    res.status(200).json(books);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json(defaultErrorMessage);
  }
});

bookRouter.get('/:id', async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    return res.status(200).json(book);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json(defaultErrorMessage);
  }
});

bookRouter.post('/', async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const createdAt = new Date();
    const newBook = Book.create({title, author, pageQuantity, createdAt, updatedAt: createdAt });
    return res.status(201).json(newBook);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json(defaultErrorMessage);
  }
});

module.exports = bookRouter;