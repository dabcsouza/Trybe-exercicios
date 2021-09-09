const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

const expectedResult1 = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

function reduceNames() {
  authorName = books.reduce((stringReturn, book) => {
    stringReturn.push(book.author.name);
    return stringReturn;
  }, []);
  return `${authorName.join(', ')}.`;
}

assert.strictEqual(reduceNames(), expectedResult1);


// Exercicio2

const expectedResult2 = 43;

function averageAge() {
  const average = books.map(book => book.releaseYear - book.author.birthYear).reduce((acc, year,_,array) => {
    acc += year / (array.length);
    return acc;
  }, 0);
  return Math.round(average);
}


assert.strictEqual(averageAge(), expectedResult2);

//exercicio 3

const expectedResult3 = {
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: {
    name: 'George R. R. Martin',
    birthYear: 1948,
  },
  releaseYear: 1991,
};

function longestNamedBook() {
  const vectorBookName = books.map(book => book.name).reduce((acc, bookName)=> bookName.length > acc.length ? bookName : acc);
  return books[vectorBookName.indexOf(vectorBookName)];
}

assert.deepStrictEqual(longestNamedBook(), expectedResult3);
