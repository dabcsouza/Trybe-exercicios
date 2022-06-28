import { connect, Schema, model } from  'mongoose';

const options = {
  autoIndex: false,
  dbName: 'model_example',
}

connect('mongodb://localhost:27017/meu_data_base', options);

interface Book {
  title: string,
  author: string,
}

const bookSchema = new Schema<Book>({
  title: { type: String, required: true },
  author: { type: String, required: true },
});

const bookModel = model<Book>('books', bookSchema);