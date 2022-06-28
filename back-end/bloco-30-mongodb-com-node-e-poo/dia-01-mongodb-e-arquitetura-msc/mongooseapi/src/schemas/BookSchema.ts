import { Schema } from 'mongoose';

export interface IBook {
  title: string,
  author: string,
  publishedYear: number,
  wheight?: string,
}

export const BookSchema = new Schema({
  title: { type: String, required: true},
  author: { type: String, required: true},
  publishedYear: { type: Number, required: false},
  wheight: { type: String, required: false},
});