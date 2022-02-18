const connection = require('./connection');

const serialize = (bookData) => ({
  title: bookData.title,
  authorName: bookData.author_name,
});

const getAll = async () => {
  const q = `SELECT t1.title, concat(t2.first_name, ' ',
    t2.middle_name, ' ',
      t2.last_name) author_name
    FROM books t1
    INNER JOIN authors t2
    ON t1.author_id = t2.id;`
  const [books] = await connection.execute(q);
  return books.map(serialize)
    .map((book) => (
      book.authorName
        ? book
        : {...book, authorName: 'Indefinido' }
      )
    );
}

const getById = async (id) => {
  const q = `SELECT t1.title, concat(t2.first_name, ' ',
  t2.middle_name, ' ',
    t2.last_name) author_name
  FROM books t1
  INNER JOIN authors t2
  ON t1.author_id = t2.id
  WHERE t1.id = ?;`
  const [book] = await connection.execute(q, [id]);
  return (!book || book.length === 0) ? null : book;
};

const isValidAuthor = async (id) => {
  if (!id) return false;
  const querryString = 'SELECT * FROM authors WHERE id=?'
  const [author] = await connection.execute(querryString, [id])
  if (author.length === 0) return false;
  return true;
};

const isValidBook = (title) => {
  if (!title || typeof title !== 'string') return false;
  return (title.length < 3) ? false : true;
};

const insertBook = async (title, author_id) => {
  const insertQuerry = 'INSERT INTO model_example.books (title, author_id) VALUES (?,?)';
  return await connection.execute(insertQuerry, [title, author_id]);
}

module.exports = { getAll, getById, isValidBook, isValidAuthor, insertBook };