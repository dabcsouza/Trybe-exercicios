import { Router } from 'express';
import BooksController from '../controllers/books.controller';
import validationBook from '../middlewares/books.middleware';

const booksRouter = Router();
const booksController = new BooksController();

booksRouter.get('/books', booksController.getAll);
booksRouter.get('/books/:id', booksController.getById);
booksRouter.post('/books/', validationBook, booksController.create);

export default booksRouter;